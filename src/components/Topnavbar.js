import { useState } from 'react';
import { Link } from 'react-router-dom';


const Topnavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="navbar">
            <div className="nav-container">
                {/* <div className="logo">MyApp</div> */}

                <div className={`nav-links ${isOpen ? 'active' : ''}`}>
                    <Link to="/dashboard">Dashboard</Link>
                    <Link to="/addemp">Add Employee</Link>
                    <Link to="/emptable">Employee Details</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/signup">Signup</Link>
                    
                </div>

                <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </div>
        </nav>
    )
}

export default Topnavbar
