import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { sign_in } from '../api/Auth';

export const SignInPage = () => {
	const [userId, setUserId] = useState('');
	const [password, setPassword] = useState('');
	const navigation = useNavigate();

	const onSingnInClick = async () => {
		const ret = await sign_in(userId, password);
		console.log(ret);
		if (ret && ret.token) {
			navigation('/main');
		}
	};

	return (
		<div>
			<div>
				<label htmlFor='id'>ID</label>
				<input id='id' value={userId} type='text' onChange={(evt) => setUserId(evt.target.value)} />
			</div>
			<div>
				<label htmlFor='password'>Password</label>
				<input
					id='password'
					value={password}
					type='text'
					onChange={(evt) => setPassword(evt.target.value)}
				/>
			</div>
			<div>
				<button type='button' onClick={onSingnInClick}>
					Login
				</button>
			</div>
		</div>
	);
};
