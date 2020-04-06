import { v4 as uuidv4 } from 'uuid';

export default (app) => {
	const { STRING, DATE } = app.Sequelize;
	const User = app.model.define(
		'sys_user',
		{
			uid: {
				type: STRING(64),
				primaryKey: true,
			},
			name: STRING(20),
			uname: STRING(20),
			psw: STRING(64),
			salt: STRING(10),
			tel: STRING(20),
			email: STRING(50),
			created_at: DATE,
			updated_at: DATE,
		},
		{ freezeTableName: true }
	);
	// ↓通用的
	/**
	 * 使用用户名查询用户
	 * @param {string} uname 用户名
	 */
	User.getUserByUname = async function (uname: string) {
		return await this.findAll({
			where: { uname },
			raw: true,
		});
	};

	User.registUser = async function ({ uname, psw, salt }) {
		return await User.create({
			uid: uuidv4(),
			uname,
			psw,
			salt,
		});
	};
	return User;
};
