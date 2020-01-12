import { Controller } from 'egg';

export default class login extends Controller {
	public async index() {
		const { ResponseCode } = this.ctx.app.locals;
		const { ctx } = this;
		const { uname, psw } = ctx.request.body;
		const code: number = await ctx.service.ex.login.loginValidate(uname, psw);
		// 登录成功时发token存放到coocie setcookie
		if (code === ResponseCode.Login_Success) {
			// set cookie
			const token = await ctx.service.ex.login.getToken(uname);
			ctx.cookies.set('boboan', token, {
				maxAge: 300000,
				httpOnly: true, // 默认就是 true
			});
		}
		ctx.body = await ctx.service.response.format(code);
	}
}
