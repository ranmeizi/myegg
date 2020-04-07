import { Service } from 'egg';
import * as CryptoJS from 'crypto-js';

export default class login extends Service {
	public async loginValidate(uname: string, psw: string): Promise<number> {
		const { ResponseCode } = this.ctx.app.locals;
		// 获取此用户
		const user: any[] = await this.getUser(uname)
		// 验证有没有此用户
		if (user.length === 0) {
			return ResponseCode.Login_NoUser;
		}
		// 验证密码
		const salt = user?.[0].salt
		const saltPsw = user?.[0].psw
		// 使用盐加密用户的psw
		const uPsw = this.createSaltyPsw(salt, psw)

		if (uPsw !== saltPsw) {
			return ResponseCode.Login_WrongPass;
		} else {
			// 生成token
			return ResponseCode.Login_Success;
		}
	}

	public async hasUser(uname: string){
		
	}
	/**
	 * 查询用户
	 * @param uname 用户名
	 */
	public async getUser(uname: string): Promise<any[]> {
		const { ctx } = this;
		let result: any[] = [];
		try {
			result = await ctx.model.User.getUserByUname(uname);
		} catch (e) {
			console.log('[getUser]', e);
		}
		// 有-true 无-false
		return result;
	}

	/**
	 * 发token
	 * @param uname 用户名
	 */
	public async getToken(uname: string) {
		console.log(uname);
		return 'woshi token';
	}
	/**
	 * 生成盐
	 */
	public createSalt(): string {
		const str: string = 'Pneumonoultramicroscopicsilicovolcanoconiosis';
		let salt: string = '';
		for (let i = 0; i < 10; i++) {
			// 随机获取一个字
			salt += str[Math.floor(Math.random() * str.length)];
		}
		return salt;
	}
	/**
	 * 生成捣乱的密码密文
	 * @param salt
	 * @param psw
	 */
	public createSaltyPsw(salt: string, psw: string) {
		const hash: string = CryptoJS.SHA256(psw + salt);
		return hash.toString();
	}

	public async createNewMember({ salt, saltyPsw, uname }): Promise<number> {
		const { ctx } = this;
		const { ResponseCode } = ctx.app.locals;
		let code = ResponseCode.Regist_Success;
		try {
			await ctx.model.User.registUser({
				uname,
				psw: saltyPsw,
				salt,
			});
		} catch (e) {
			console.log(e);
			code = ResponseCode.Regist_Wrong;
		}
		return code;
	}
}
