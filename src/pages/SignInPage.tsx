import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { sign_in } from '../api/Auth';
import { UserContext } from '../prviders/UserProvider';

export const SignInPage = () => {
	const [userId, setUserId] = useState('');
	const [password, setPassword] = useState('');
	const navigation = useNavigate();
	const { setUserInfo } = useContext(UserContext);

	const onSingnInClick = async () => {
		const ret = await sign_in(userId, password);
		if (ret && ret.token) {
			setUserInfo({ token: ret.token, id: ret.user_id });
			navigation('/main');
		}
	};

	return (
		<SSignInFrame>
			<SSignInRow>
				<SSignInLabel>
					<label htmlFor='id'>ID</label>
				</SSignInLabel>
				<SSignInInput>
					<input
						id='id'
						value={userId}
						type='text'
						onChange={(evt) => setUserId(evt.target.value)}
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
					/>
				</SSignInInput>
			</SSignInRow>
			<SSignInRow>
				<SLoginButton type='button' onClick={onSingnInClick}>
					Login
				</SLoginButton>
			</SSignInRow>
		</SSignInFrame>
	);
};

const SSignInFrame = styled.div`
	background-color: #f8f8f8;
	margin: 80px;
	padding-top: 8px;
	padding-bottom: 8px;
	border-radius: 8px;
	box-shadow: 0 8px 8px #aaaaaa;
`;

const SSignInRow = styled.div`
	dixplay: inline-block;
	width: auto;
	margin-top: 4px;
	margin-bottom: 4px;
`;

const SSignInLabel = styled.span`
	display: inline-block;
	width: 80px;
	vertical-align: top;
	text-align: right;
	margin-right: 8px;
`;

const SSignInInput = styled.span`
	display: inline-block;
	width: auto;
	vertical-align: top;
`;

const SLoginButton = styled.button`
	background-color: #444444;
	color: #f0f0f0;
	padding: 4px 16px;
	border-radius: 8px;
	&:hover {
		cursor: pointer;
		opacity: 0.8;
	}
`;
