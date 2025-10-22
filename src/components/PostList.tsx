import { useContext, useEffect } from 'react';
import { Post } from './Post';
import { UserContext } from '../prviders/UserProvider';
import { PostListContext, PostType } from '../prviders/PostListProvider';
import { getList } from '../api/Post';
import { SPostList } from '../styles/ComponentStyles';

export const PostList = () => {
	const { userInfo } = useContext(UserContext);
	const { postList, setPostList } = useContext(PostListContext);

	const getPostList = async () => {
		const posts = await getList(userInfo.token);

		if (posts) {
			setPostList(posts);
		}
	};

	useEffect(() => {
		getPostList();
	}, []);

	return (
		<SPostList>
			{postList.map((post) => (
				<Post key={post.id} post={post} />
			))}
		</SPostList>
	);
};
