import './App.css';
import Navbar from './components/Navbar';
import Home from './Pages/Home'
import About from './Pages/About'
import Projects from './Pages/Projects'
import Resume from './Pages/Resume'
import Footer from './components/Footer'
import { Route,Routes } from 'react-router-dom';


function App() {


  
  

  return (
    <div className="App">
      

      <div className='w-full'>
          <Navbar />
      </div>

      <Routes>

        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/resume' element={<Resume/>}/>
      </Routes>

      <div>
        <Footer/>
      </div>

    </div>
  );
}

export default App;
