import './App.css';

//Configuração do React Router
import {BrowserRouter, Routes, Route} from 'react-router-dom';

//Components
import Navbar from './components/Navbar';

//pages
import Home from './pages/Home';
import About from  './pages/About';
import Products from './pages/Products';


function App() {
  return (
    <div className="App">
      <h1>Context API</h1>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}>Home</Route>
          <Route path="/products" element={<Products/>}>Produtos</Route>
          <Route path="/about" element={<About/>}>Sobre</Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
