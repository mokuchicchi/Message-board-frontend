import React, { ReactNode, useContext, useState } from 'react';
import { PostListContext, PostType } from '../prviders/PostListProvider';

import { SDate, SUserName, SPost, SDeleteButton } from '../styles/ComponentStyles';
import { format } from 'date-fns';
import { ja } from 'date-fns/locale';
import { UserContext } from '../prviders/UserProvider';
import { deletePost, getList } from '../api/Post';
import { PostListFetchContext } from '../prviders/PostListFetchProvider';

type PropsType = {
	id: number;
	post: PostType;
};

export const Post = (props: PropsType) => {
	const { id, post } = props;
	const { userInfo } = useContext(UserContext);
	const { setFetch } = useContext(PostListFetchContext);
	const date = new Date(post.createdat);

	const getDateStr = (dateObj: Date) => {
		return format(dateObj, 'yyyy年M月d日 HH時mm分ss秒', { locale: ja });
	};

	const getLines = (src: string): ReactNode => {
		return src.split('\n').map((line, index) => {
			return (
				<React.Fragment key={index}>
					{line}
					<br />
				</React.Fragment>
			);
		});
	};

	const haveAuth = userInfo.uuid === post.uuid;

	const onClickDeletePost = () => {
		deletePost(userInfo.token, id);
		setFetch(true);
	};

	return (
		<SPost>
			<div>
				<div className='flex'>
					<SUserName>{post.username}</SUserName>
					<SDate>{getDateStr(date)}</SDate>
				</div>
				<div>{getLines(post.content)}</div>
			</div>
			{haveAuth ? <SDeleteButton onClick={onClickDeletePost}>削除</SDeleteButton> : <></>}
		</SPost>
	);
};
