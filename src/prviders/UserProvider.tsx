import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from 'react';

type UserInfo = {
	uuid: string;
	token: string;
};

export const UserContext = createContext(
	{} as { userInfo: UserInfo; setUserInfo: Dispatch<SetStateAction<UserInfo>> }
);

type PropsType = {
	children: ReactNode;
};

export const UserProvider = (props: PropsType) => {
	const { children } = props;
	const [userInfo, setUserInfo] = useState<UserInfo>(() => {
		const saved = localStorage.getItem('userInfo');
		return saved ? JSON.parse(saved) : { uuid: '', token: '' };
	});

	useEffect(() => {
		localStorage.setItem('userInfo', JSON.stringify(userInfo));
	}, [userInfo]);

	return <UserContext.Provider value={{ userInfo, setUserInfo }}>{children}</UserContext.Provider>;
};
