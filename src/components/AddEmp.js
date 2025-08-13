import { useState } from "react";
const AddEmp = () => {
    const [Name, setName] = useState('');
    const [Gender, setGender] = useState('');
    const Genders = ['Female', 'Male', 'Other'];
    const [DOB, setDOB] = useState('');
    const [Age, setAge] = useState('');
    const [Mobnum, setMobnum] = useState('');
    const [Email, setEmail] = useState('');
    const [Department, setDepartment] = useState('');
    const Departments = ['HR', 'IT', 'Marketing', 'Finance'];
    const [error, setError] = useState("");

    const handleSave = async (e) => {
        e.preventDefault();
        const addEmployee = {
            Name, Gender, DOB, Age,
            Mobnum, Email, Department
        };

        if (Name === "") {
            alert("Please enter name !");
        }
        else if (Gender === "") {
            alert("Please select gender !");
        }
        else if (DOB === "") {
            alert("Please select birth date !");
        }
        // else if (Age === "") {
        //     alert("Please enter age !");
        // }
        else if (Mobnum === "") {
            alert("Please enter mobile number !");
        }

        else if (Email === "") {
            alert("Please enter email !");
        }
        else if (Department === "") {
            alert("Please select department !");
        }

        else {
            try {
                const res = await fetch('http://localhost:8081/employeedata', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(addEmployee)
                });

                if (res.ok) {
                    alert('Employee added successfully!');
                    handleClear();
                } else {
                    console.error('Failed to add employee');
                    alert('Failed to add employee');
                }
            }

            catch (err) {
                console.error('Error posting employee:', err);
            }
        }

    };

    const calculateAge = (dobValue) => {
        const today = new Date();
        const birthDate = new Date(dobValue);

        let calculatedAge = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();

        // Adjust if birthday hasn't happened yet this year
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            calculatedAge--;
        }

        setAge(calculatedAge);
    };

    const handleDobChange = (e) => {
        const dobValue = e.target.value;
        setDOB(dobValue);
        calculateAge(dobValue);
    };

    const handleClear = () => {
        setName('');
        setAge('');
        setEmail('');
        setDepartment('');
        setGender('');
        setDOB('');
        setMobnum('');
    }
    return (
        <div className="rounded shadow p-5 m-5 md:max-w-xl md:mx-auto lg:max-w-2xl xl:max-w-4xl bg-gray-100">
            <form className="space-y-4">

                <article className="md:grid grid-cols-2 gap-10">
                    <div className="flex flex-col" >
                        <label className="block mb-1 ml-1 text-gray-600">Name</label>
                        <input className="w-full border border-gray-300 rounded px-4 py-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-300 focus:outline-none"
                            placeholder='Enter name' type="text" name="name" value={Name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <p className='reqField'>{Name ? "" : "Name is required "}</p>
                    </div>
                    <div className="flex flex-col" >
                        <label className="block mb-1 ml-1 text-gray-600">Gender</label>
                        <select value={Gender}
                            onChange={(e) => setGender(e.target.value)}
                            className="w-full border border-gray-300 rounded 
                            px-4 py-2 focus:border-blue-500 focus:ring-1
                             focus:ring-blue-300 focus:outline-none"
                        >
                            <option value="" disabled>Select Gender</option>
                            {Genders.map((gen) => (
                                <option key={gen} value={gen}>{gen}</option>
                            ))}
                        </select>
                        <p className='reqField'>{Gender ? "" : "Gender is required "}</p>
                    </div>
                </article>

                <article className="md:grid grid-cols-3 gap-10">
                    <div className="flex flex-col" >
                        <label className="block mb-1 ml-1 text-gray-600">DOB</label>
                        <input className="w-full border border-gray-300 rounded px-4 py-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-300 focus:outline-none"
                            placeholder='Select dob' type="date" name="dob" value={DOB}
                            //onChange={(e) => setDOB(e.target.value)}
                            max={new Date().toISOString().split("T")[0]} // restricts future dates
                            onChange={handleDobChange}
                        />
                        <p className='reqField'>{DOB ? "" : "DOB is required "}</p>
                    </div>

                    <div className="flex flex-col" >
                        <label className="block mb-1 ml-1 text-gray-600">Age</label>
                        <input className="w-full border border-gray-300 rounded px-4 py-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-300 focus:outline-none"
                            placeholder='Enter age' type="number" name="age" value={Age}
                            onChange={(e) => setAge(e.target.value)}
                            readOnly
                        />
                        {/* <p className='reqField'>{Age ? "" : "Age is required "}</p> */}
                    </div>

                    <div className="flex flex-col" >
                        <label className="block mb-1 ml-1 text-gray-600">Mobile Number</label>
                        <input className="w-full border border-gray-300 rounded px-4 py-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-300 focus:outline-none"
                            placeholder='Enter mobile number' type="number" name="mobnum" value={Mobnum}
                            //onChange={(e) => setMobnum(e.target.value)}
                            maxLength={10} // ensures no more than 10 digits can be typed
                            onChange={(e) => {
                                const value1 = e.target.value;
                                // Allow only numbers
                                if (/^\d*$/.test(value1)) {
                                    setMobnum(value1);
                                }
                            }}
                            onBlur={() => {
                                if (Mobnum.length !== 10) {
                                    alert("Mobile number must be exactly 10 digits");
                                }
                            }}
                        />
                        <p className='reqField'>{Mobnum ? "" : "Mobile number is required "}</p>
                    </div>
                </article>

                <article className="md:grid grid-cols-2 gap-10">
                    <div className="flex flex-col" >
                        <label className="block mb-1 ml-1 text-gray-600">Email</label>
                        <input className="w-full border border-gray-300 rounded px-4 py-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-300 focus:outline-none"
                            placeholder='Enter email' type="email" name="email" value={Email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <p className='reqField'>{Email ? "" : "Email is required "}</p>
                    </div>

                    <div className="flex flex-col" >
                        <label className="block mb-1 ml-1 text-gray-600">Department</label>
                        <select value={Department}
                            onChange={(e) => setDepartment(e.target.value)}
                            className="w-full border border-gray-300 rounded 
                            px-4 py-2 focus:border-blue-500 focus:ring-1
                             focus:ring-blue-300 focus:outline-none"
                        >
                            <option value="" disabled>Select Department</option>
                            {Departments.map((dept) => (
                                <option key={dept} value={dept}>{dept}</option>
                            ))}
                        </select>
                        <p className='reqField'>{Department ? "" : "Department is required "}</p>
                    </div>
                </article>

                <div>
                    <button style={{ float: 'left', marginRight: '10px' }}
                        className="bg-blue-500 text-white font-bold py-2 px-8 rounded shadow 
                        border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 
                        transition-all duration-300" onClick={(e) => handleSave(e)}>Save</button>
                    <button className="bg-gray-500 text-white font-bold py-2 px-8 rounded shadow 
                        border-2 border-gray-500 hover:bg-transparent hover:text-gray-500 
                        transition-all duration-300" onClick={() => handleClear()}>Clear</button>
                </div>
            </form>
        </div>
    )
}

export default AddEmp
