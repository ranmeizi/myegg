enum CST_ERR_CODE {
	// 20001-登录-密码错误
	Login_WrongPass = 20001,
	// 20002-登录-没有此用户
	Login_NoUser = 20002,
	// 20003-登录-验证失败
	Login_VerificationFail = 20003,
	// 20004-注册-重复的用户名
	Regist_SameUname = 20004,
	// 20005-注册-注册失败
	Regist_Wrong = 20005
}

export default CST_ERR_CODE;
