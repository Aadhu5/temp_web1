import './App.css';
import Home from './pages/home'
import Contact from './pages/contact';
import { Router, Route, Routes } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
      <Route path="/" element={<Home/>} />
        
        <Route path='/contact'>
          <Contact />
        </Route>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
