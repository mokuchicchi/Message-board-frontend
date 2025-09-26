import { useContext } from 'react';
import { Layout } from '../components/Layout';
import { PostListProvider } from '../prviders/PostListProvider';
import { UserContext } from '../prviders/UserProvider';
import { Navigate } from 'react-router-dom';

export const MainPage = () => {
	const { userInfo } = useContext(UserContext);
	const loggedIn = userInfo.token !== '';

	return <PostListProvider>{loggedIn ? <Layout /> : <Navigate replace to='/' />}</PostListProvider>;
};
