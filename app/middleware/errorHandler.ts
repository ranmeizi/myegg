export default () => {
  return async function errorHandler(ctx, next) {
    try {
      await next()
    } catch (err) {
      const { CST_ERR_CODE } = ctx.app.locals;
      const status = err?.status || 500
      // 不知道是啥的异常记录日志
      status === 500 && ctx.app.emit('error', err, ctx);
      const error = status === 500 && ctx.app.config.env === 'prod'
        ? 'Internal Server Error'
        : err.message
      const msg = status > 600 ? CST_ERR_CODE[status] : error
      ctx.body = await ctx.service.response.format(status || 500, null, msg)
    }
  };
};
