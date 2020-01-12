import { Service } from 'egg';
import { USER_DATA } from '../../fack/user';

export default class login extends Service {
	public async loginValidate(uname: string, psw: string): Promise<boolean> {
		const { ResponseCode } = this.ctx.app.locals
		// 验证有没有此用户
		if (!this.hasUser(uname)) {
			return ResponseCode.Login_NoUser
		}
		// 验证密码
		if (!this.verifPsw(uname, psw)) {
			return ResponseCode.Login_WrongPass
		}
		// 人机验证还是啥验证，反正先写一下
		if (!this.exVerif('哈哈哈')) {
			return ResponseCode.Login_VerificationFail
		}

		return ResponseCode.Login_Success
	}

	public async hasUser(uname: string): Promise<boolean> {
		return USER_DATA.hasOwnProperty(uname) && true
	}

	public async verifPsw(uname: string, psw: string): Promise<boolean> {
		return USER_DATA[uname].psw === psw
	}

	public async exVerif(value): Promise<boolean> {
		console.log('exVerif', value)
		return true
	}
	public async getToken(uname: string) {
		console.log(uname);
		return 'woshi token';
	}
}
