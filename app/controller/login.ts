import { Controller } from 'egg';
// import { CST_ERR_CODE } from '../middleware/errorHandler'

/**
 * 登录
 */
export default class login extends Controller {
	public async login() {
		const { ctx } = this;
		const { uname, psw } = ctx.query;
		// 获取token
		const data = await ctx.service.login.getToken(uname, psw);
		ctx.body = await ctx.service.response.format(200, data);
	}
	/**
	 * 注册
	 */
	public async regist() {
		const { ctx } = this;
		const { uname, psw } = ctx.request.body;
		// 查询 uname 是否存在
		await ctx.service.login.checkSameUser(uname)
		// 生成新用户
		await ctx.service.login.createNewMember(uname, psw);
		ctx.body = await ctx.service.response.format(200);
	}
}
