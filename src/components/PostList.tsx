import { useContext, useEffect } from 'react';
import { Post } from './Post';
import { UserContext } from '../prviders/UserProvider';
import { PostListContext, PostType } from '../prviders/PostListProvider';
import { getList } from '../api/Post';
import { SPostList, SReloadButton } from '../styles/ComponentStyles';
import { PostListFetchContext } from '../prviders/PostListFetchProvider';

export const PostList = () => {
	const { userInfo } = useContext(UserContext);
	const { postList, setPostList } = useContext(PostListContext);
	const { fetch, setFetch } = useContext(PostListFetchContext);

	const getPostList = async () => {
		const posts = await getList(userInfo.token);

		if (posts) {
			setPostList(posts);
		}
	};

	useEffect(() => {
		if (!userInfo.token) return;

		const intervalId = setInterval(() => {
			getPostList();
		}, 1000);

		return () => clearInterval(intervalId);
	}, [userInfo.token]);

	useEffect(() => {
		getPostList();
		setFetch(false);
	}, [fetch]);

	const onClickReload = () => {
		setFetch(true);
	};

	return (
		<>
			<SPostList>
				{postList.map((post) => (
					<Post key={post.id} id={post.id} post={post} />
				))}
			</SPostList>
			<SReloadButton onClick={onClickReload}>読み込み</SReloadButton>
		</>
	);
};
