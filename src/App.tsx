import { Route, Routes } from 'react-router-dom';
import './App.css';
import { SignInPage } from './pages/SignInPage';
import { MainPage } from './pages/MainPage';

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<SignInPage />} />
				<Route path='/main' element={<MainPage />} />
			</Routes>
		</div>
	);
}

export default App;
