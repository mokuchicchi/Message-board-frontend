import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { sign_in } from '../api/Auth';
import { UserContext } from '../prviders/UserProvider';
import { createUser } from '../api/User';
import {
	SLeftButton,
	SRightButton,
	SSignInFrame,
	SSignInInput,
	SSignInLabel,
	SSignInRow,
} from '../styles/PageStyles';

export const SignInPage = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const [errors, setErrors] = useState<string[]>([]);
	const navigation = useNavigate();
	const { setUserInfo } = useContext(UserContext);
	const [isSigningUp, setIsSigningUp] = useState(false);

	const onClickSingnIn = async () => {
		const ret = await sign_in(name, password);
		if (ret && ret.token) {
			setUserInfo({ uuid: ret.uuid, token: ret.token });
			navigation('/main');
		} else {
			setError(ret.message);
		}
	};

	const onClickCreateAccount = () => {
		setIsSigningUp(true);
		setError('');
	};

	const onClickSignUp = async () => {
		const ret = await createUser(name, email, password);
		if (!ret || ret.length === 0) {
			setIsSigningUp(false);
			setErrors([]);
		} else {
			setErrors(ret);
		}
	};

	const onClickGoBack = () => {
		setIsSigningUp(false);
		setErrors([]);
	};

	return !isSigningUp ? (
		<SSignInFrame>
			<SSignInRow>
				<SSignInLabel>
					<label htmlFor='id'>Name</label>
				</SSignInLabel>
				<SSignInInput>
					<input
						id='id'
						value={name}
						type='text'
						onChange={(evt) => setName(evt.target.value)}
						className='pl-1'
					/>
				</SSignInInput>
			</SSignInRow>
			<SSignInRow>
				<SSignInLabel>
					<label htmlFor='password'>Password</label>
				</SSignInLabel>
				<SSignInInput>
					<input
						id='password'
						value={password}
						type='text'
						onChange={(evt) => setPassword(evt.target.value)}
						className='pl-1'
					/>
				</SSignInInput>
			</SSignInRow>
			{error ? (
				<SSignInRow>
					<div className='text-red-500'>{error}</div>
				</SSignInRow>
			) : (
				<></>
			)}
			<SSignInRow>
				<SLeftButton onClick={onClickCreateAccount}>Create Account</SLeftButton>
				<SRightButton type='button' onClick={onClickSingnIn}>
					Login
				</SRightButton>
			</SSignInRow>
		</SSignInFrame>
	) : (
		<SSignInFrame>
			<SSignInRow>
				<SSignInLabel>
					<label htmlFor='id'>Name</label>
				</SSignInLabel>
				<SSignInInput>
					<input
						id='id'
						value={name}
						type='text'
						onChange={(evt) => setName(evt.target.value)}
						className='pl-1'
					/>
				</SSignInInput>
			</SSignInRow>
			<SSignInRow>
				<SSignInLabel>
					<label htmlFor='password'>Email</label>
				</SSignInLabel>
				<SSignInInput>
					<input
						id='email'
						value={email}
						type='text'
						onChange={(evt) => setEmail(evt.target.value)}
						className='pl-1'
					/>
				</SSignInInput>
			</SSignInRow>
			<SSignInRow>
				<SSignInLabel>
					<label htmlFor='password'>Password</label>
				</SSignInLabel>
				<SSignInInput>
					<input
						id='password'
						value={password}
						type='text'
						onChange={(evt) => setPassword(evt.target.value)}
						className='pl-1'
					/>
				</SSignInInput>
			</SSignInRow>
			{errors ? (
				errors.map((error) => (
					<SSignInRow key={error}>
						<div className='text-red-500'>{error}</div>
					</SSignInRow>
				))
			) : (
				<></>
			)}
			<SSignInRow>
				<SLeftButton type='button' onClick={onClickGoBack}>
					Go Back
				</SLeftButton>
				<SRightButton type='button' onClick={onClickSignUp}>
					Sign Up
				</SRightButton>
			</SSignInRow>
		</SSignInFrame>
	);
};
