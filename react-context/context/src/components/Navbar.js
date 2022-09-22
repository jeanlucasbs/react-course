import './Navbar.css';

import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <NavLink to="/" className={({ isActive }) => (isActive ? 'inactive' : 'active')}>Home</NavLink>
        <NavLink to="/about">Sobre</NavLink>
        <NavLink to="/products">Produtos</NavLink>
    </nav>
  );
};

export default Navbar;