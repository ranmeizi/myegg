import { Service } from 'egg';
import { USER_DATA } from '../fack/user';
import * as CryptoJS from 'crypto-js'

export default class login extends Service {
	public async loginValidate(uname: string, psw: string): Promise<number> {
		const { ResponseCode } = this.ctx.app.locals;
		// 验证有没有此用户
		if (!(await this.hasUser(uname))) {
			return ResponseCode.Login_NoUser;
		}
		// 人机验证还是啥验证，反正先写一下
		if (!(await this.exVerif('哈哈哈'))) {
			return ResponseCode.Login_VerificationFail;
		}
		// 验证密码
		if (!(await this.verifPsw(uname, psw))) {
			return ResponseCode.Login_WrongPass;
		}

		return ResponseCode.Login_Success;
	}

	/**
	 * 查询用户
	 * @param uname 用户名
	 */
	public async hasUser(uname: string): Promise<boolean> {
		return USER_DATA.hasOwnProperty(uname);
	}
	/**
	 * 密码验证
	 * @param uname 用户名
	 * @param psw 密码
	 */
	public async verifPsw(uname: string, psw: string): Promise<boolean> {
		console.log(uname, psw);
		return USER_DATA[uname].psw === psw;
	}
	/**
	 * 人机验证
	 * @param value 什么什么值
	 */
	public async exVerif(value: string): Promise<boolean> {
		console.log('exVerif', value);
		return true;
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
		const str: string = 'Pneumonoultramicroscopicsilicovolcanoconiosis'
		let salt: string = ''
		for (let i = 0; i < 10; i++) {
			// 随机获取一个字
			salt += str[Math.round(Math.random() * str.length)]
		}
		return salt
	}
	/**
	 * 生成捣乱的密码密文
	 * @param salt 
	 * @param psw 
	 */
	public createSaltyPsw(salt: string, psw: string) {
		const hash: string = CryptoJS.SHA256(psw + salt)
		return hash
	}

	public async createNewMember(): Promise<number> {
		return 1
	}

	public async createUser() {

	}

}
