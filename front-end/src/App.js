import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Blogs from './pages/blogs';
import Contact from './pages/contact';
import SignIn from './pages/signin';
import Register from './Components/register';

function App() {
  return (
    <main className="App">
      <div className='navbar'>
        <header>
          <Router>
          <Navbar/>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/blogs' element={<Blogs/>} />
            <Route path='/signin' element={<SignIn/>} />
            <Route path='/register' element={<Register/>} />
            
          </Routes>
          </Router>
        </header>
      </div>
    </main>
  );
}

export default App;
