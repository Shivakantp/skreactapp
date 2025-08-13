import { Link } from 'react-router-dom';
import { FaSignOutAlt } from "react-icons/fa";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

export default function Topnavbar({ isLoggedIn, handleLogout, isOpen, setIsOpen }) {
    return (
        <nav className="navbar">
            <div className="nav-container">

                <div className={`nav-links ${isOpen ? 'active' : ''}`}>
                    {isLoggedIn ? (
                        <>
                            <Link to="/dashboard" onClick={() => setIsOpen(!isOpen)}>Dashboard</Link>
                            <Link to="/addemp" onClick={() => setIsOpen(!isOpen)}>Add Employee</Link>
                            <Link to="/emptable" onClick={() => setIsOpen(!isOpen)}>Employee Details</Link>
                            <Link to="/aboutus" onClick={() => setIsOpen(!isOpen)}>About Us</Link>
                            <Link to="/contactus" onClick={() => setIsOpen(!isOpen)}>Contact Us</Link>
                            <button id="logoutBtn" onClick={handleLogout} className="logout-btn text-left"><FaSignOutAlt /></button>
                            <Tooltip anchorSelect="#logoutBtn" place="bottom" content="Logout from your account" />
                        </>
                    ) : (
                        <>
                            <Link to="/login" onClick={() => setIsOpen(!isOpen)}>Login</Link>
                            <Link to="/signup" onClick={() => setIsOpen(!isOpen)}>Signup</Link>
                            <Link to="/aboutus" onClick={() => setIsOpen(!isOpen)}>About Us</Link>
                        </>
                    )}
                </div>

                <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </div>
        </nav>
    );
}
