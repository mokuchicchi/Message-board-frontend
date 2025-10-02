import axios from 'axios';

export const sign_in = async (user_id: string, password: string) => {
	const url = `${process.env.REACT_APP_BACK_ADRESS}/auth?user_id=${user_id}&password=${password}`;
	console.log(url);
	try {
		const res = await axios.get(url);
		return res.data;
	} catch (err) {
		console.error('API request error:', err);
		return null;
	}
};
