import React, { ReactNode } from 'react';
import { PostType } from '../prviders/PostListProvider';

import { SDate, SUserName, SPost } from '../styles/ComponentStyles';
import { format } from 'date-fns';
import { ja } from 'date-fns/locale';

type PropsType = {
	post: PostType;
};

export const Post = (props: PropsType) => {
	const { post } = props;
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

	return (
		<SPost>
			<div className='flex'>
				<SUserName>{post.username}</SUserName>
				<SDate>{getDateStr(date)}</SDate>
			</div>
			<div>{getLines(post.content)}</div>
		</SPost>
	);
};
