import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';

export const PostListFetchContext = createContext(
	{} as { fetch: boolean; setFetch: Dispatch<SetStateAction<boolean>> }
);

type PropsType = {
	children: ReactNode;
};

export const PostListFetchProvider = (props: PropsType) => {
	const { children } = props;
	const [fetch, setFetch] = useState<boolean>(false);

	return (
		<PostListFetchContext.Provider value={{ fetch, setFetch }}>
			{children}
		</PostListFetchContext.Provider>
	);
};
