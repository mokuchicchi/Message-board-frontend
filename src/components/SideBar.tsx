import { useContext, useState } from 'react';
import styled from 'styled-components';
import { UserContext } from '../prviders/UserProvider';
import { getList, post } from '../api/Post';
import { PostListContext, PostType } from '../prviders/PostListProvider';

export const SideBar = () => {
	const [msg, setMsg] = useState('');
	const { userInfo } = useContext(UserContext);
	const { setPostList } = useContext(PostListContext);

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

	const onSendClick = async () => {
		await post(userInfo.id, userInfo.token, msg);
		await getPostList();
	};

	return (
		<SSidebar>
			<SSideBarRow>hoge</SSideBarRow>
			<SSideBarRow>hoge@example.com</SSideBarRow>
			<div>
				<SSideBarTextArea rows={4} value={msg} onChange={(evt) => setMsg(evt.target.value)} />
			</div>
			<div>
				<SSideBarButton onClick={onSendClick}>送信</SSideBarButton>
			</div>
		</SSidebar>
	);
};

const SSidebar = styled.div`
	width: 400px;
	height: 100%;
	padding: 8px;
	background-color: lightblue;
`;

const SSideBarRow = styled.div`
	margin: 4px;
	/* border: 1px solid black; */
	text-align: left;
`;

const SSideBarTextArea = styled.textarea`
	border-radius: 4px;
	box-sizing: border-box;
	box-shadow: inset 1px 1px 4px #cccccc;
	min-width: 100%;
	min-height: 150px;
	resize: vertical;
`;

const SSideBarButton = styled.button`
	width: 100%;
	height: 30px;
	padding: 4px;
	border-radius: 8px;
	color: white;
	background-color: black;
`;
