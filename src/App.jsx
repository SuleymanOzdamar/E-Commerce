import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Navbar from './components/Navbar';
import Signin from './pages/Auth/Signin';
import Signup from './pages/Auth/Signup';
import Products from './pages/products';
import ProductsDetail from './pages/productsDetail';
import Basket from './pages/Basket';
import ProductsDetail1 from './pages/productsDetail/index1';
import ProductsDetail2 from './pages/productsDetail/index2';
import About from './pages/about';
import Contact from './pages/contact';

function App() {
  return (
    <Router>
      <div>
        
        <Navbar />
        <div id='content'>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/1" element={<ProductsDetail />} />
          <Route path="/2" element={<ProductsDetail1 />} />
          <Route path="/3" element={<ProductsDetail2 />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/basket" element={<Basket />} />
        </Routes>
        </div>
        
      </div>
    </Router>
  );
}



export default App;
