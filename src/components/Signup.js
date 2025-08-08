import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [UserName, setUserName] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const addcredential = {
      UserName, Email, Password
    };

    if (UserName === "") {
      alert("Please enter username !");
    }
    else if (Email === "") {
      alert("Please enter email !");
    }
    else if (Password === "") {
      alert("Please enter password !");
    }

    else {
      try {
        const res = await fetch('http://localhost:8081/signuplogin', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(addcredential)
        });

        const data = await res.json();
        if (res.ok) {
          setMessage(data.message);
          alert('Signup successfully!');
          handleClear();
          navigate("/login");
        } else {
          setMessage(data.error);
          console.error('Failed to signup');
          alert('Already have an account with this email, please enter new email !');
        }
      }

      catch (err) {
        console.error('Error posting signup:', err);
      }
    }
  };

  const handleClear = () => {
    setUserName('');
    setEmail('');
    setPassword('');

  }
  return (
    <div className="rounded shadow p-5 m-5 md:max-w-xl md:mx-auto lg:max-w-2xl xl:max-w-4xl bg-gray-100">
      <form className="space-y-4">
        <article className="md:grid grid-cols-1 gap-10">
          <div className="flex flex-col" >
            <label className="block mb-1 ml-1 text-gray-600">User Name</label>
            <input className="w-full border border-gray-300 rounded px-4 py-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-300 focus:outline-none"
              placeholder='Enter username' type="text" name="username" value={UserName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <p className='reqField'>{UserName ? "" : "User Name is required "}</p>
          </div>
        </article>
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
                        transition-all duration-300" onClick={(e) => handleSubmit(e)}>Signup</button>
          <button className="bg-gray-500 text-white font-bold py-2 px-8 rounded shadow 
                        border-2 border-gray-500 hover:bg-transparent hover:text-gray-500 
                        transition-all duration-300" onClick={() => handleClear()}>Clear</button>
          <div className="bottom-msg">Already have an account?<span className='span'><Link to="/login">Login</Link></span></div>
        </div>
      </form>
      {message && <p className="mt-4 text-red-500">{message}</p>}
    </div>
  )
}

export default Signup
