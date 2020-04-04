export default () => {
	return async function time(ctx, next) {
		// 最最最最前面的中间件，记录一下request时间
		ctx.reqStartTime = Date.now();
		next();
	};
};
