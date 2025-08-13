import { Link} from 'react-router-dom';

export default function Topnavbar({ isLoggedIn, handleLogout, isOpen, setIsOpen }) {
    return (
        <nav className="navbar">
            <div className="nav-container">

                <div className={`nav-links ${isOpen ? 'active' : ''}`}>
                    {isLoggedIn ? (
                        <>
                            <Link to="/dashboard">Dashboard</Link>
                            <Link to="/addemp">Add Employee</Link>
                            <Link to="/emptable">Employee Details</Link>
                            <Link to="/aboutus">About Us</Link>
                            <Link to="/contactus">Contact Us</Link>
                            <button onClick={handleLogout} className="logout-btn">Logout</button>
                        </>
                    ) : (
                        <>
                            <Link to="/login">Login</Link>
                            <Link to="/signup">Signup</Link>
                            <Link to="/aboutus">About Us</Link>
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
