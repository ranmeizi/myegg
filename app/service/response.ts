import { Service } from 'egg';

export default class test extends Service {
	public async format(code: number, data?: any, msg?: string) {
		return {
			code,
			success: code >= 200 && code < 300,
			data: data || null,
			msg: msg || '',
			cost: `${Date.now() - this.ctx.reqStartTime}ms`,
		};
	}
}
