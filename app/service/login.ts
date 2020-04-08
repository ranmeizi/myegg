import { Service } from 'egg';
import * as CryptoJS from 'crypto-js';
import { CustError, CST_ERR_CODE } from '../middleware/errorHandler'

export default class login extends Service {
	/**
	 * 验证用户名密码，返回token
	 * @param uname 
	 * @param psw 
	 */
	public async getToken(uname: string, psw: string): Promise<object> {
		// 获取此用户
		const user: any[] = await this.getUser(uname)
		// 验证有没有此用户
		if (user.length === 0) {
			throw new CustError(CST_ERR_CODE.Login_NoUser)
		}
		// 验证密码
		const salt = user?.[0].salt
		const saltPsw = user?.[0].psw
		// 使用盐加密用户的psw
		const uPsw = await this.createSaltyPsw(psw, salt)

		console.log(uPsw, saltPsw)
		if (uPsw !== saltPsw) {
			console.log('密码错误')
			throw new CustError(CST_ERR_CODE.Login_WrongPass)
		}

		// 获取token
		let uinfo = {
			...user[0],
			psw: '淡黄色长裙',
			salt: '蓬松的头发'
		}
		const token = this.app.jwt.sign(uinfo, this.app.config.jwt.secret, {
			expiresIn:'1d'
		});
		return {
			token,
			uinfo
		}
	}
  /**
	 * 检查是否有相同的用户名
	 * @param uname 
	 */
	public async checkSameUser(uname: string): Promise<void> {
		let user = await this.getUser(uname)
		if (user.length > 0) {
			throw new CustError(CST_ERR_CODE.Regist_SameUname)
		}
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
	 * 生成盐
	 */
	public async createSalt(): Promise<string> {
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
	public async createSaltyPsw(psw: string, salt: string): Promise<string> {
		const hash: string = CryptoJS.SHA256(psw + salt);
		return hash.toString();
	}

	/**
	 * createNewMember 新建普通用户
	 * @param uname 
	 * @param salt 
	 * @param saltyPsw 
	 */
	public async createNewMember(uname: string, psw: string): Promise<void> {
		const { ctx } = this;
		// 生成 盐和加密后的字符串
		const salt: string = await this.createSalt();
		const saltyPsw: string = await this.createSaltyPsw(psw, salt);
		await ctx.model.User.registUser({
			uname,
			psw: saltyPsw,
			salt,
		});
	}
}
