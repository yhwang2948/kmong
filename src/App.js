import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from './components/pages/AboutUs';
import Certification from './components/pages/Certification';
import OrderProcess from './components/pages/OrderProcess';
import Projects from './components/pages/Projects';
import Mpm from './components/pages/Mpm';
import Review from './components/pages/Review';
import Consulting from './components/pages/Consulting';
import Aosaff from './components/pages/Aoasff';

function App() {
  return (
    <BrowserRouter>
       <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services/aboutUs" element={<AboutUs />} />
          <Route path="/services/certification" element={<Certification/>}/>
          <Route path="/services/orderProcess" element={<OrderProcess/>}/>
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/aosaff" element={<Aosaff />} />
          <Route path="/projects/mpm" element={<Mpm />} />
          <Route path="/projects/review" element={<Review/>} />
          <Route path="/contact/order" component={<Consulting/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;