import './App.css';
import Register from './Components/register';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Blogs from './pages/blogs';
import Contact from './pages/contact';

function App() {
  return (
    <main className="App">
      <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/blogs' element={<Blogs/>} />
        <Route path='/register' element={<Register/>} />
      </Routes>
      </Router>

      
    </main>
  );
}

export default App;
