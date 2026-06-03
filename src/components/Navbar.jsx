import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar">
            <h2 className="navbar-logo">Ferretry Analytics</h2>

            <div className="navbar-links">
                <NavLink to="/">Dashboard</NavLink>
                <NavLink to="/ferrets">Ferrets</NavLink>
                <NavLink to="/litters">Litters</NavLink>
                <NavLink to="/BreederAnalytics">Analytics</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;