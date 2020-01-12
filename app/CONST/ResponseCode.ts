enum ResponseCode {
	// 1-登录-登录成功
	Login_Success = 1,
	// 100001-登录-密码错误
	Login_WrongPass = 100001,
	// 100002-登录-没有此用户
	Login_NoUser = 100002,
	// 100003-登录-验证失败
	Login_VerificationFail = 100003
}

export default ResponseCode;
