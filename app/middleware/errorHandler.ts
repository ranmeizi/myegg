export default () => {
  return async function errorHandler(ctx, next) {
    try {
      await next()
    } catch (err) {
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

export class CustError extends Error {
  status: number
  constructor(status: number, message?: string) {
    super()
    this.status = status
    if (message) {
      this.message = message
    }
  }
}
export enum CST_ERR_CODE {
  // 10001-登录-密码错误
  Login_WrongPass = 10001,
  // 10002-登录-没有此用户
  Login_NoUser = 10002,
  // 10003-登录-验证失败
  Login_VerificationFail = 10003,
  // 10004-注册-重复的用户名
  Regist_SameUname = 10004,
  // 10005-注册-注册失败
  Regist_Wrong = 10005
}