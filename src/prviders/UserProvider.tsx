import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';

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
	const [userInfo, setUserInfo] = useState({ uuid: '', token: '' });

	return <UserContext.Provider value={{ userInfo, setUserInfo }}>{children}</UserContext.Provider>;
};
