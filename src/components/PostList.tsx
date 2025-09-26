import { useContext, useEffect } from 'react';
import { Post } from './Post';
import { UserContext } from '../prviders/UserProvider';
import { PostListContext, PostType } from '../prviders/PostListProvider';
import { getList } from '../api/Post';
import styled from 'styled-components';

export const PostList = () => {
	const { userInfo } = useContext(UserContext);
	const { postList, setPostList } = useContext(PostListContext);

	const getPostList = async () => {
		console.log(userInfo);
		const posts = await getList(userInfo.token);
		console.log(posts);

		let newPostList: Array<PostType> = [];
		if (posts) {
			posts.forEach((post: any) => {
				newPostList.push(post);
			});
		}
		setPostList(newPostList);
	};

	useEffect(() => {
		getPostList();
	});

	return (
		<SPostList>
			{postList.map((post) => (
				<Post key={post.id} post={post} />
			))}
		</SPostList>
	);
};

const SPostList = styled.div`
	background-color: white;
	height: calc(100% - 32px);
	margin: 16px 8px;
	overflow-y: scroll;
`;
