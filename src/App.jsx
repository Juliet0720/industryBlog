import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import Blog from "./pages/Blog"
import Footer from "./components/footer"
import "./App.css"

function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App
