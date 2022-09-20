import "./Navbar.css";

import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return(
        <nav>
            {/* <Link to="/">Home</Link>
            <Link to="/about">Sobre</Link> */}

            {/* Link ativo */}
            {/*className={({isActive}) => (isActive ? "esta-ativo" : "nao-ativo")}*/}
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Home</NavLink>
            <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Sobre</NavLink>
        </nav>
    );
};

export default Navbar;