import { useState, useEffect } from 'react';
import Emptable from './components/Emptable';
import AddEmp from './components/AddEmp';
import Dashboard from './components/dashboard';
import Topnavbar from './components/Topnavbar';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  useEffect(() => {
    const storedLogin = localStorage.getItem("isLoggedIn");
    const storedUser = localStorage.getItem("user");

    if (storedLogin === "true" && storedUser) {
      setIsLoggedIn(true);
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user");
  };
  return (
    <>
      <div>
        <HashRouter>
          <Topnavbar
            isLoggedIn={isLoggedIn}
            handleLogout={handleLogout}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            user={user}
            setUser={setUser}
          />
          <Routes>
            <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} setUser={setUser} />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Navigate to="" />} />
            <Route path="/addemp" element={isLoggedIn ? <AddEmp /> : <Navigate to="" />} />
            <Route path="/emptable" element={isLoggedIn ? <Emptable /> : <Navigate to="" />} />
          </Routes>
        </HashRouter>
      </div>
    </>

  );
}

export default App;
