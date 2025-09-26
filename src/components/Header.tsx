import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { UserContext } from '../prviders/UserProvider';
import { getUser } from '../api/User';

export const Header = () => {
	const navigation = useNavigate();
	const [userName, setUserName] = useState('');
	const { userInfo, setUserInfo } = useContext(UserContext);

	useEffect(() => {
		const myGetUser = async () => {
			const user = await getUser(userInfo.id, userInfo.token);
			setUserName(user.name);
		};
		myGetUser();
	});

	const onClickLogout = () => {
		setUserInfo({ token: '', id: 0 });
		navigation('/');
	};

	return (
		<SHeader>
			<SLogo>MicroPost</SLogo>
			<SRightItem>
				<SName>{userName}</SName>
				<SLogout onClick={onClickLogout}>ログアウト</SLogout>
			</SRightItem>
		</SHeader>
	);
};

const SHeader = styled.div`
	background-color: #222;
	display: flex;
	flex-direction: row;
	width: 100%;
	height: 54px;
`;

const SLogo = styled.div`
	color: white;
	padding: 16px;
	text-align: center;
	justify-content: start;
`;

const SRightItem = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: end;
`;

const SName = styled.div`
	color: white;
	padding: 16px;
	text-align: center;
`;

const SLogout = styled.div`
	color: white;
	padding: 16px;
	text-align: center;
	&:hover {
		cursor: pointer;
	}
`;
