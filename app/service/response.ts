import { Service } from 'egg';

export default class test extends Service {
	public async format(code: number, data: any = null) {
		const { ResponseCode } = this.ctx.app.locals;
		return {
			code,
			success: code < 100000,
			data,
			msg: ResponseCode[code],
			cost: `${Date.now() - this.ctx.reqStartTime}ms`,
		};
	}
}
