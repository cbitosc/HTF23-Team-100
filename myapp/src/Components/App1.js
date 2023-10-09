import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // or MemoryRouter
import PageRoutes from './PageRoutes';

function App() {
  return (
    <Router>
      <PageRoutes />
    </Router>
  );
}
export default App;

