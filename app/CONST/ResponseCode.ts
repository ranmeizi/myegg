enum ResponseCode {
	// 1-登录-登录成功
	Login_Success = 1,
	// 2-注册-注册成功
	Regist_Success = 2,
	// 100001-登录-密码错误
	Login_WrongPass = 100001,
	// 100002-登录-没有此用户
	Login_NoUser = 100002,
	// 100003-登录-验证失败
	Login_VerificationFail = 100003,
	// 100004-注册-重复的用户名
	Regist_SameUname = 10004
}

export default ResponseCode;
