import { Controller } from 'egg';

export default class login extends Controller {
	public async index() {
		const { ctx } = this;
		const { uname, psw } = ctx.request.body;
		const rc: boolean = await ctx.service.ex.login.loginValidate(uname, psw);
		if (rc) {
			// set cookie
			const token = await ctx.service.ex.login.getToken(uname);
			ctx.cookies.set('boboan', token, {
				maxAge: 300000,
				httpOnly: true, // 默认就是 true
			});
		}
		ctx.body = rc ? await ctx.service.response.format(1) : await ctx.service.response.format(10001);
	}
}
