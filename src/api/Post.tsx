import axios from 'axios';

export const post = async (token: string, content: string) => {
	const data = {
		message: content,
	};
	const url = `${process.env.REACT_APP_BACK_ADRESS}/post?token=${token}`;
	const res = await axios.post(url, data);
};

export const getList = async (token: string) => {
	const url = `${process.env.REACT_APP_BACK_ADRESS}/post?token=${token}&records=10`;
	const res = await axios.get(url);
	return res.data;
};

export const deletePost = async (token: string, id: number) => {
	const url = `${process.env.REACT_APP_BACK_ADRESS}/post?token=${token}&id=${id}`;
	const res = await axios.delete(url);
};
