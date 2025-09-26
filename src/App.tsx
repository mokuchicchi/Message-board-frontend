import { Route, Routes } from 'react-router-dom';
import './App.css';
import { SignInPage } from './pages/SignInPage';
import { MainPage } from './pages/MainPage';
import { UserProvider } from './prviders/UserProvider';

function App() {
	return (
		<div className='App'>
			<UserProvider>
				<Routes>
					<Route path='/' element={<SignInPage />} />
					<Route path='/main' element={<MainPage />} />
				</Routes>
			</UserProvider>
		</div>
	);
}

export default App;
