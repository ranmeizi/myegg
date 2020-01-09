import { Service } from 'egg';
import ResponseCode from '../CONST/ResponseCode';

export default class test extends Service {
	public async format(code: number, data: any = null) {
		return {
			code,
			success: code < 10000,
			data,
			msg: ResponseCode[code],
			cost: `${Date.now() - this.ctx.reqStartTime}ms`,
		};
	}
}
