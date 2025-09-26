import { createContext, Dispatch, SetStateAction, useState } from 'react';

type UserInfo = {
	id: number;
	token: string;
};

export const UserContext = createContext(
	{} as { userInfo: UserInfo; setUserInfo: Dispatch<SetStateAction<UserInfo>> }
);

export const UserProvider = (props: any) => {
	const { children } = props;
	const [userInfo, setUserInfo] = useState({ token: '', id: 0 });

	return <UserContext.Provider value={{ userInfo, setUserInfo }}>{children}</UserContext.Provider>;
};
