import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Blog from './pages/blog';  // Make sure the path is correct
import Home from './pages/home';  // Make sure you have a Home component
import './App.css'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
}

export default App;
