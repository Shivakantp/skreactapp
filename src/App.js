//import './App.css';
import { useState } from 'react';
import Emptable from './components/Emptable';
//import Navbar from './components/Navbar';
import AddEmp from './components/AddEmp';
import Dashboard from './components/dashboard';
import Topnavbar from './components/Topnavbar';
// import Dashboard from './components/Dashboard';
//import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
//import Home from './components/Home';
//import { Navigate } from 'react-router-dom';
//import ProtectedRoute from './components/ProtectedRoute';



function App() {
  //const [isLoggedIn, setIsLoggedIn] = useState(false); // Login state
  //const [isLoggedIn, setIsLoggedIn] = useState(false); // or use localStorage
  // const [user, setUser] = useState(null);

  // const handleLogout = () => setUser(null);
  return (
    <>
      <div>
        <HashRouter>
          <Topnavbar />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/addemp' element={<AddEmp />} />
              <Route path='/emptable' element={<Emptable />} />
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<Signup />} />
            </Routes>
          </div>

        </HashRouter>
      </div>

      {/* <BrowserRouter>
        {isLoggedIn && <Topnavbar />}
        <Routes>
          <Route path="/" element={<Login />} />

      
          <Route path="/login" element={<Login onLoginSuccess={() => setIsLoggedIn(true)} />} />
          <Route path="/signup" element={<Signup />} />

         
          <Route
            path="/dashboard"
            element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />}
          />
          <Route path='/addemp' element={<AddEmp />} />
          <Route path='/emptable' element={<Emptable />} />

          
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter> */}

      {/* <div>
        <HashRouter>
           <Routes>
          {user ? <Topnavbar onLogout={handleLogout} /> : null}
          {!user ? (
            <>
            <Routes>
               <Login onLogin={setUser} />
              <Signup />
              <Route path="/login" element={<Login onLogin={setUser} />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
             
            </>
          ) : (
            <ProtectedRoute user={user}>
             <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/addemp' element={<AddEmp />} />
              <Route path='/emptable' element={<Emptable />} />
            </ProtectedRoute>
          )}
          </Routes>
        </HashRouter>

      </div> */}

      {/* <BrowserRouter>
      {user && <Topnavbar onLogout={handleLogout} />}
      <Routes>
        <Route path="/" element={<Login Login={setUser} />} />
        <Route path="/login" element={<Login Login={setUser} />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute user={user}>
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/addemp' element={<AddEmp />} />
              <Route path='/emptable' element={<Emptable />} />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter> */}
    </>

  );
}

export default App;
