import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';

export type PostType = {
	id: number;
	uuid: string;
	username: string;
	content: string;
	createdat: string;
};

export const PostListContext = createContext(
	{} as { postList: PostType[]; setPostList: Dispatch<SetStateAction<PostType[]>> }
);

type PropsType = {
	children: ReactNode;
};

export const PostListProvider = (props: PropsType) => {
	const { children } = props;
	const [postList, setPostList] = useState<PostType[]>([]);

	return (
		<PostListContext.Provider value={{ postList, setPostList }}>
			{children}
		</PostListContext.Provider>
	);
};
