import axios from 'axios';

export const getUser = async (user_id: number, token: string) => {
	const url = `${process.env.REACT_APP_BACK_ADRESS}/user/${user_id}?token=${token}`;
	const res = await axios.get(url);
	return res.data;
};
