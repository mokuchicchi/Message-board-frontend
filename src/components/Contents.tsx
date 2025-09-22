import styled from 'styled-components';
import { PostList } from './PostList';

export const Contents = () => {
	return (
		<SContents>
			<PostList></PostList>
		</SContents>
	);
};

const SContents = styled.div`
	width: 80%;
	height: 100%;
	border: 2px solid pink;
`;
