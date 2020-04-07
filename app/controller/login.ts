import { Controller } from 'egg';

export default class login extends Controller {
	public async getToken() {
		const { ResponseCode } = this.ctx.app.locals;
		const { ctx } = this;
		const { uname, psw } = ctx.request.body;
		const code: number = await ctx.service.login.loginValidate(uname, psw);
		// 登录成功时发token存放到coocie setcookie
		if (code === ResponseCode.Login_Success) {
			const { token, uinfo } = ctx
			ctx.body = await ctx.service.response.format(code, {
				token, uinfo
			});
		} else {
			ctx.body = await ctx.service.response.format(code);
		}
	}
	public async regist() {
		const { ctx } = this;
		const { ResponseCode } = ctx.app.locals;

		const { uname, psw } = ctx.request.body;
		// 查询 uname 是否存在
		if ((await ctx.service.login.getUser(uname)).length > 0) {
			// 返回错误，已经存在的用户名
			ctx.body = await ctx.service.response.format(ResponseCode.Regist_SameUname);
		} else {
			// 生成 盐和加密后的字符串
			const salt: string = ctx.service.login.createSalt();
			const saltyPsw: string = ctx.service.login.createSaltyPsw(psw, salt);
			// 生成新用户
			const code: number = await ctx.service.login.createNewMember({
				salt,
				saltyPsw,
				uname,
			});
			ctx.body = await ctx.service.response.format(code);
		}
	}
}
