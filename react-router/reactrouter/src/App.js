import './App.css';

//1- Config React Router
import {BrowserRouter, Routes, Route} from 'react-router-dom';

//pages
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Info from './pages/Info';
import Page404 from './pages/Page404';

//navegação
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          
          {/*Nested Routes */}
          <Route path="/products/:id/info" element={<Info/>}/>
          
          {/*Rota dinâmica */}
          <Route path="/products/:id" element={<Product/>}/>

          {/*no match route */}
          <Route path="*" element={<Page404/>}/>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
