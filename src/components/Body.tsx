import { Contents } from './Contents';
import { SideBar } from './SideBar';
import { SBody } from '../styles/ComponentStyles';

export const Body = () => {
	return (
		<SBody>
			<SideBar />
			<Contents />
		</SBody>
	);
};
