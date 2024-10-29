import './App.css';
import Home from './components/home';
import About from './components/about';
import ThreeBackground from './components/notfound';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path="*" element={<ThreeBackground/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
