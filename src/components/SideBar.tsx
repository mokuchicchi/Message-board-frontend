import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../prviders/UserProvider';
import { getList, post } from '../api/Post';
import { PostListContext, PostType } from '../prviders/PostListProvider';
import { getUser } from '../api/User';
import { SSidebar, SSideBarButton, SSideBarRow, SSideBarTextArea } from '../styles/ComponentStyles';

export const SideBar = () => {
	const [msg, setMsg] = useState('');
	const [userName, setUserName] = useState('');
	const [userEmail, setUserEmail] = useState('');
	const { userInfo } = useContext(UserContext);
	const { setPostList } = useContext(PostListContext);

	const fetchCurrentUser = async () => {
		const user = await getUser(userInfo.uuid, userInfo.token);
		setUserName(user.name);
		setUserEmail(user.email);
	};

	useEffect(() => {
		fetchCurrentUser();
	}, []);

	const getPostList = async () => {
		const posts = await getList(userInfo.token);

		let newPostList: Array<PostType> = [];
		if (posts) {
			posts.forEach((post: PostType) => {
				newPostList.push(post);
			});
		}
		setPostList(newPostList);
	};

	const onSendClick = async () => {
		await post(userInfo.token, msg);
		await getPostList();
	};

	return (
		<SSidebar>
			<SSideBarRow>{userName}</SSideBarRow>
			<SSideBarRow>{userEmail}</SSideBarRow>
			<div>
				<SSideBarTextArea rows={4} value={msg} onChange={(evt) => setMsg(evt.target.value)} />
			</div>
			<div>
				<SSideBarButton onClick={onSendClick}>送信</SSideBarButton>
			</div>
		</SSidebar>
	);
};
