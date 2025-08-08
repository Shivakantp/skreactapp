
// import { Link } from 'react-router-dom';
// const Navbar = () => {
//     return (
//         <div>
//             <nav>
//                 <ul>
//                     <li>                       
//                         <Link to="/addemp">Add Employee</Link> 
//                         <Link to="/emptable">Employee Details</Link>                       
//                     </li>
//                 </ul>
//             </nav>
//         </div>
//     )
// }

// export default Navbar
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Mobile Toggle Button */}
            <button
                className="md:hidden p-4 focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Sidebar */}
            <div className={`fixed inset-y-0 left-0 z-30 w-64 bg-gray-800 text-white transform 
                      ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
                      transition-transform duration-300 ease-in-out md:translate-x-0 md:static md:block`}>
                <div className="p-6 text-xl font-bold border-b border-gray-700">
                    React Appp
                </div>
                <nav className="flex flex-col p-4 space-y-2">
                    <Link className="block hover:bg-gray-700 p-2 rounded" to="/dashboard">Dashboard</Link>
                    <Link className="block hover:bg-gray-700 p-2 rounded" to="/addemp">Add Employee</Link>
                    <Link className="block hover:bg-gray-700 p-2 rounded" to="/emptable">Employee Details</Link>
                    <Link className="block hover:bg-gray-700 p-2 rounded" to="/signup">Signup</Link>
                    <Link className="block hover:bg-gray-700 p-2 rounded" to="/login">Login</Link>
                </nav>
            </div>
        </>
    );
};

export default Navbar;
