import { Service } from 'egg';
import { USER_DATA } from '../../fack/user';

export default class login extends Service {
	public async loginValidate(uname: string, psw: string): Promise<boolean> {
		return USER_DATA?.[uname]?.psw === psw;
	}
	public async getToken(uname) {
		console.log(uname);
		return 'woshi token';
	}
}
