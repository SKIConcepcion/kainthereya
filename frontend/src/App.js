import { BrowserRouter, Routes, Route } from 'react-router-dom'

import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import SignupPage from './pages/SignupPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className='pages'>
          <Routes>

            < Route path="/" element={<LoginPage/>} />
            < Route path="/signup" element={<SignupPage/>} />
            < Route path="/home" element={<HomePage/>} />
            
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
