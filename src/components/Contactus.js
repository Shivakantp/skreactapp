import { useState } from "react";
const Contactus = () => {
    const [Name, setName] = useState('');       
        const [Email, setEmail] = useState('');
        const [Message, setMessage] = useState('');
        
        const handleSave = async (e) => {
            e.preventDefault();
            const addContactus = {
                Name, Email, Message
            };
    
            if (Name === "") {
                alert("Please enter name !");
            }
           
            else if (Email === "") {
                alert("Please enter email !");
            }
            else if (Message === "") {
                alert("Please enter message !");
            }
    
            else {
                try {
                    const res = await fetch('http://localhost:8081/contactus', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(addContactus)
                    });
    
                    if (res.ok) {
                        alert('Thank you for contacting us!');
                        handleClear();
                    } else {
                        console.error('Failed to contacting us');
                        alert('Failed to contacting us');
                    }
                }
    
                catch (err) {
                    console.error('Error posting contacting us:', err);
                }
            }
    
        };
    
        const handleClear = () => {
            setName('');
            setEmail('');
            setMessage('');
        }
  return (
    <div className="rounded shadow p-5 m-5 md:max-w-xl md:mx-auto lg:max-w-2xl xl:max-w-4xl bg-gray-100">
        <div style={{fontWeight:"500",color:"#474747",
                margin:'0px 0px 10px 0px',paddingBottom:'10px',borderBottom:'1px solid #d5d5d5'}}>Contact Us</div>
            <form className="space-y-4 mb-4">

                <article className="md:grid grid-cols-1 gap-10">
                    <div className="flex flex-col" >
                        <label className="block mb-1 ml-1 text-gray-600">Name</label>
                        <input className="w-full border border-gray-300 rounded px-4 py-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-300 focus:outline-none"
                            placeholder='Enter name' type="text" name="name" value={Name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <p className='reqField'>{Name ? "" : "Name is required "}</p>
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
                        <label className="block mb-1 ml-1 text-gray-600">Message</label>
                        <textarea className="w-full border border-gray-300 rounded px-4 py-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-300 focus:outline-none"
                            placeholder='Enter message' type="message" name="message" value={Message}
                            rows="2" onChange={(e) => setMessage(e.target.value)}
                        />
                        <p className='reqField'>{Message ? "" : "Message is required "}</p>
                    </div>
                </article>

                <div>
                    <button style={{ float: 'left', marginRight: '10px' }}
                        className="bg-blue-500 text-white font-semibold py-1 px-4 rounded shadow 
                        border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 
                        transition-all duration-300" onClick={(e) => handleSave(e)}>Send</button>
                    <button className="bg-gray-500 text-white font-semibold py-1 px-4 rounded shadow 
                        border-2 border-gray-500 hover:bg-transparent hover:text-gray-500 
                        transition-all duration-300" onClick={() => handleClear()}>Clear</button>
                </div>
            </form>

                      {/* Contact Info */}
          <div className="bg-gray-100 p-6 rounded-lg shadow py-4">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Get in Touch</h2>
            <p className="text-gray-700 mb-4">
              Have questions or need help? Reach out to us using the form or via
              the contact details below.
            </p>
            <div className="space-y-3">
              <p>
                <strong>📍 Address:</strong> 123 Main Street, City, Country
              </p>
              <p>
                <strong>📞 Phone:</strong> +1 234 567 890
              </p>
              {/* <p>
                <strong>📧 Email:</strong> <a className="text-blue-600 hover:text-red-600" href="https://synthesisworld.com" target="_blank" rel="noreferrer">https://synthesisworld.com</a>
              </p> */}
            </div>
            {/* <div className="mt-6">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448182.73910040106!2d76.81307204964316!3d28.64667725875915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd35a6f7c6f9%3A0x4cfc39f9e5f5e7a6!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1691761234567!5m2!1sen!2sin"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div> */}
          </div>
        </div>
  )
}

export default Contactus
