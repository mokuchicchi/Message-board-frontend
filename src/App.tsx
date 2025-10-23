import { Route, Routes } from 'react-router-dom';
import './App.css';
import { SignInPage } from './pages/SignInPage';
import { MainPage } from './pages/MainPage';
import { UserProvider } from './prviders/UserProvider';
import { PostListFetchProvider } from './prviders/PostListFetchProvider';
import { PostListProvider } from './prviders/PostListProvider';

function App() {
	return (
		<div className='App'>
			<UserProvider>
				<PostListProvider>
					<PostListFetchProvider>
						<Routes>
							<Route path='/' element={<SignInPage />} />
							<Route path='/main' element={<MainPage />} />
						</Routes>
					</PostListFetchProvider>
				</PostListProvider>
			</UserProvider>
		</div>
	);
}

export default App;
