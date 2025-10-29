import axios from 'axios';

export const getUser = async (uuid: string, token: string) => {
	const url = `${process.env.REACT_APP_BACK_ADRESS}/user/${uuid}?token=${token}`;
	const res = await axios.get(url);
	return res.data;
};

const errorMap: { [key: string]: string } = {
	'name should not be empty': '名前を入力してください',
	'email must be an email': 'メールアドレスの形式が正しくありません',
	'email must be an email, email should not be empty': 'メールアドレスを入力してください',
	'password must be longer than or equal to 6 characters':
		'パスワードは6文字以上で入力してください',
	'password must be longer than or equal to 6 characters, password should not be empty':
		'パスワードを入力してください',
};

export const createUser = async (name: string, email: string, password: string) => {
	const data = {
		name,
		email,
		password,
	};
	const url = `${process.env.REACT_APP_BACK_ADRESS}/user`;

	try {
		const res = await axios.post(url, data);
		return undefined;
	} catch (err) {
		if (axios.isAxiosError(err)) {
			if (err.response && err.response.data && err.response.data.errors) {
				const errors: string[] = err.response.data.errors;
				const japaneseErrors = errors.map((e) => errorMap[e] || e);
				return japaneseErrors;
			}
		}
	}
};
