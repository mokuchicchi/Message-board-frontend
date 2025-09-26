import React, { ReactNode } from 'react';
import styled from 'styled-components';

export const Post = (props: any) => {
	const { post } = props;
	const date = new Date(post.created_at);

	const getDateStr = (dateObj: Date) => {
		const year = dateObj.getFullYear();
		const month = dateObj.getMonth() + 1;
		const date = dateObj.getDate();
		const hour = dateObj.getHours();
		const min = dateObj.getMinutes();
		const sec = dateObj.getSeconds();
		return `${year}年${month}月${date}日 ${hour}時${min}分${sec}秒`;
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
			<STag>
				<SName>{post.user_name}</SName>
				<SDate>{getDateStr(date)}</SDate>
			</STag>
			<div>{getLines(post.content)}</div>
		</SPost>
	);
};

const SPost = styled.div`
	margin: 8px 0px;
	border-bottom: 1px solid #aaa;
	text-align: left;
	padding-left: 8px;
`;

const STag = styled.div`
	display: flex;
`;

const SName = styled.div`
	font-size: small;
	color: #000044;
`;

const SDate = styled.div`
	margin-left: 8px;
	font-size: small;
	color: #000044;
`;
