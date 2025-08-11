import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Login = ({ setIsLoggedIn,setUser }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setMessage("All fields are required");
      return;
    }

    try {
      const response = await fetch("http://localhost:8081/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (data.success) {
        setMessage(`Welcome ${data.user.email}`);
        setIsLoggedIn(true);
        navigate('/dashboard');
        setUser(data.user);
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("user", JSON.stringify(data.user));
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      setMessage("Error connecting to server");
    }
  };

  return (
    <div className="rounded shadow p-5 m-5 md:max-w-xl md:mx-auto lg:max-w-2xl xl:max-w-4xl h-[300px] bg-gray-100">
      <form className="space-y-4">
        <article className="md:grid grid-cols-1 gap-10">
          <div className="flex flex-col" >
            <label className="block mb-1 ml-1 text-gray-600">Email</label>
            <input className="w-full border border-gray-300 rounded px-4 py-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-300 focus:outline-none"
              placeholder='Enter email' type="email" name="email" value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <p className='reqField'>{email ? "" : "Email is required "}</p>
          </div>
        </article>
        <article className="md:grid grid-cols-1 gap-10">
          <div className="flex flex-col" >
            <label className="block mb-1 ml-1 text-gray-600">Password</label>
            <input className="w-full border border-gray-300 rounded px-4 py-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-300 focus:outline-none"
              placeholder='Enter password' type="password" name="password" value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className='reqField'>{password ? "" : "Password is required "}</p>
          </div>
        </article>
        <div>
          <button style={{ float: 'left', marginRight: '10px' }}
            className="bg-blue-500 text-white font-bold py-2 px-8 rounded shadow 
                        border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 
                        transition-all duration-300" onClick={(e) => handleLogin(e)}>Login</button>
          <div className="bottom-msg">If you don't have to an account?<span className='span'><Link to="/signup">Signup</Link></span></div>
        </div>
      </form>
      {message && <p className="mt-4 text-red-500">{message}</p>}
    </div>
  )
}

export default Login
