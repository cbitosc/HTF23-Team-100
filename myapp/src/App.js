//import { Outlet } from 'react-router-dom'
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'; // or MemoryRouter
//import ARoutes from './Routes';
import PageRoutes from './Components/PageRoutes';
//import {Router} from 
function App() {
  return (
    <div className="App">
      <Router>
      <PageRoutes />
    </Router>
    </div>
  );
}

export default App;
