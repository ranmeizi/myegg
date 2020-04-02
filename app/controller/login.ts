import { Controller } from 'egg';

export default class login extends Controller {
	public async getToken() {
		const { ResponseCode } = this.ctx.app.locals;
		const { ctx } = this;
		const { uname, psw } = ctx.request.body;
		const code: number = await ctx.service.login.loginValidate(uname, psw);
		// 登录成功时发token存放到coocie setcookie
		if (code === ResponseCode.Login_Success) {
			// set cookie
			const token = await ctx.service.login.getToken(uname);
			ctx.cookies.set('boboan', token, {
				maxAge: 300000,
				httpOnly: true, // 默认就是 true
			});
		}
		ctx.body = await ctx.service.response.format(code);
	}
	public async regist() {
		const { ctx } = this
		const { ResponseCode } = this.ctx.app.locals;
		const { uname, psw } = ctx.request.body
		// 查询 uname 是否存在
		if (ctx.service.hasUser(uname)) {
			// 返回错误，已经存在的用户名
			ctx.body = await ctx.service.response.format(ResponseCode.Regist_SameUname);
		}
		// 生成 盐和加密后的字符串 
		const salt: string = ctx.service.login.createSalt()
		const saltyPsw = ctx.service.login.createSaltyPsw(psw, salt)
		console.log(saltyPsw)
		// 生成新用户
		const code: number = await ctx.service.login.createNewMember()
		ctx.body = await ctx.service.response.format(code);
	}
}
