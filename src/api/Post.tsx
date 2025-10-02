import axios from 'axios';

export const post = async (user_id: number, token: string, content: string) => {
	const data = {
		message: content,
	};
	const url = `${process.env.REACT_APP_BACK_ADRESS}/post?user_id=${user_id}&token=${token}`;
	const res = await axios.post(url, data);
	console.log(res);
};

export const getList = async (token: string) => {
	const url = `${process.env.REACT_APP_BACK_ADRESS}/post?token=${token}&records=10`;
	const res = await axios.get(url);
	return res.data;
};
