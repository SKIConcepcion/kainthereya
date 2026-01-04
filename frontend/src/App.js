import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className='pages'>
          <Routes>

            < Route path="/" element={<HomePage/>} />
          
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
