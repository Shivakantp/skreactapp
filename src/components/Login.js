import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
//import axios from 'axios';

const Login = () => {
  // const [Email, setEmail] = useState('');
  // const [Password, setPassword] = useState('');
  // const [message, setMessage] = useState('');
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [message, setMessage] = useState('');


  const navigate = useNavigate();

  // const handleLogin = async () => {
  //   if (Email === "") {
  //     alert("Please enter email !");
  //   }
  //   else if (Password === "") {
  //     alert("Please enter password !");
  //   }
  //   try {
  //     const res = await fetch('http://localhost:8081/signuplogin', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify({ Email, Password })
  //     });

  //     //const data = await res.json();

  //     if (res.ok) {
  //       handleClear();
  //       alert(`Welcome ${res.UerName}`);
  //     } else {
  //       alert(res.error);
  //     }
  //   } catch (err) {
  //     console.error("Network or server error:", err);
  //   }
  // };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (Email === "") {
      alert("Please enter email !");
    }
    else if (Password === "") {
      alert("Please enter password !");
    }
    const res = await fetch('http://localhost:8081/signuplogin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ Email, Password })
    });

    const data = await res.json();
    if (res.ok) {
      setMessage(data.message);
      navigate('/dashboard');
      handleClear();
    } else {
      setMessage(data.error);
    }
  };


  const handleClear = () => {
    setEmail('');
    setPassword('');
  }

  return (
    <div className="rounded shadow p-5 m-5 md:max-w-xl md:mx-auto lg:max-w-2xl xl:max-w-4xl h-[300px] bg-gray-100">
      <form className="space-y-4">
        <article className="md:grid grid-cols-1 gap-10">
          <div className="flex flex-col" >
            <label className="block mb-1 ml-1 text-gray-600">Email</label>
            <input className="w-full border border-gray-300 rounded px-4 py-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-300 focus:outline-none"
              placeholder='Enter email' type="email" name="email" value={Email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <p className='reqField'>{Email ? "" : "Email is required "}</p>
          </div>
        </article>
        <article className="md:grid grid-cols-1 gap-10">
          <div className="flex flex-col" >
            <label className="block mb-1 ml-1 text-gray-600">Password</label>
            <input className="w-full border border-gray-300 rounded px-4 py-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-300 focus:outline-none"
              placeholder='Enter password' type="password" name="password" value={Password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className='reqField'>{Password ? "" : "Password is required "}</p>
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
      {/* {msg && <p className="mb-4">{msg}</p>} */}
      <p className="mt-4 text-center">{message}</p>
    </div>
  )
}

export default Login
