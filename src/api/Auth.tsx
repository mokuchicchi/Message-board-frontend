import axios from 'axios';

export const sign_in = async (name: string, password: string) => {
	const url = `${process.env.REACT_APP_BACK_ADRESS}/auth?name=${name}&password=${password}`;
	try {
		const res = await axios.get(url);
		return res.data;
	} catch (err) {
		if (axios.isAxiosError(err)) {
			if (err.response && err.response.data) {
				return err.response.data;
			}
		}
	}
};
