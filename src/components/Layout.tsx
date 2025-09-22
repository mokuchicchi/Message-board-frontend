import styled from 'styled-components';
import { Header } from '../components/Header';
import { SideBar } from '../components/SideBar';
import { Contents } from './Contents';

export const Layout = () => {
	return (
		<>
			<Header />
			<SBody>
				<SideBar />
				<Contents />
			</SBody>
		</>
	);
};

const SBody = styled.div`
	width: 100%;
	height: calc(100vw - 32px);
	border: 2px solid green;
	display: flex;
	flex-direction: row;
`;
