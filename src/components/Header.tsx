import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../prviders/UserProvider';
import { getUser } from '../api/User';
import { SHeader, SLogo, SLogout, SName, SRightItem } from '../styles/ComponentStyles';

export const Header = () => {
	const navigation = useNavigate();
	const [userName, setUserName] = useState('');
	const { userInfo, setUserInfo } = useContext(UserContext);

	const fetchCurrentUser = async () => {
		const user = await getUser(userInfo.uuid, userInfo.token);
		setUserName(user.name);
	};

	useEffect(() => {
		fetchCurrentUser();
	}, []);

	const onClickLogout = () => {
		setUserInfo({ uuid: '', token: '' });
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
