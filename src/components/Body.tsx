import styled from 'styled-components';
import { Contents } from './Contents';
import { SideBar } from './SideBar';

export const Body = () => {
	return (
		<SBody>
			<SideBar />
			<Contents />
		</SBody>
	);
};

const SBody = styled.div`
	width: 100%;
	height: calc(100vh - 54px);
	display: flex;
	flex-direction: row;
`;
