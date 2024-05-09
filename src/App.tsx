import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LoginPage } from './pages/LoginPage/LoginPage'
import { MainPage } from './pages/MainPage/MainPage'
import { ProfilePage } from './pages/ProfilePage/ProfilePage'
import { DetailsPage } from './pages/DetailsPage/DetailsPage'

function App() {
	return (
		<div className='App'>
			<div className='container'>
				<BrowserRouter>
					<Routes>
						<Route path='/' element={<LoginPage />} />
						<Route path='/main' element={<MainPage />} />
						<Route path='/profile' element={<ProfilePage />} />
						{/* <Route path='/details/:id' element={<DetailsPage />} /> */}
					</Routes>
				</BrowserRouter>
			</div>
		</div>
	)
}

export default App
