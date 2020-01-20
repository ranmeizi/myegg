import { Service } from 'egg';
import { USER_DATA } from '../../fack/user';

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
}
