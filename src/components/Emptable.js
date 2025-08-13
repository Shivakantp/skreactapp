import { useEffect, useState } from 'react';

const Emptable = () => {
  const [search, setSearch] = useState("");
  const [employeedata, setUsers] = useState([]);

  //Get Data from mySql
  const fetchRecord = () => {
    fetch(`http://localhost:8081/employeedata?q=${search}`)
      .then((res) => res.json())
      .then(data => setUsers(data))
      .catch((err) => console.error(err));
  }
  useEffect(() => {
    const timeout = setTimeout(() => {
      fetchRecord();
    }, 300);
    return () => clearTimeout(timeout);
  }, [search]);

  //Delete Data from mySql
  const handleDelete = (id) => {
    //alert("ID : "+id)
    if (window.confirm("Are you sure you want to delete this record?")) {
      fetch(`http://localhost:8081/employeedata/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then(() => fetchRecord()) // Refresh data after delete
        .catch((err) => console.error(err));
    }
  };

 const formatDate = (isoString) => {
    const date = new Date(isoString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
 }

  return (
    <>
      <div className="rounded shadow p-5 m-5 bg-white-100">
        <div style={{fontWeight:"500",color:"#474747",
                marginBottom:'10px',paddingBottom:'10px',borderBottom:'1px solid #d5d5d5'}}>Employee Details</div>
        {/* <div className='heading'>Employee Details</div> */}
        <div className="py-3 px-1">
          <input className="border border-gray-300 rounded px-4 py-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-300 focus:outline-none"
            placeholder='Search here...' type="text" value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>
        <div className='rounded-md border'>
          <div className='overflow-auto'>
            <table className='min-w-full divide-y divide-gray-200 text-sm text-left text-gray-600'>
              <thead className='font-bold bg-gray-100 text-gray-700 uppercase text-xs'>
                <tr>
                  <td className="px-6 py-3">Emp-ID</td>
                  <td className="px-6 py-3">Emp-Name</td>
                  <td className="px-6 py-3">Gender</td>
                  <td className="px-6 py-3">Mobile Number</td>
                  <td className="px-6 py-3">DOB</td>
                  <td className="px-6 py-3">Emp-Age</td>
                  <td className="px-6 py-3">Email</td>
                  <td className="px-6 py-3">Department</td>
                  <td className="px-6 py-3">Action</td>
                </tr>
              </thead>
              {employeedata.map(emp => (
                <tbody className='bg-white divide-y divide-gray-200'>
                  <tr key={emp.ID} className='hover:bg-gray-100 transition-colors duration-200'>
                    <td className='px-6 py-4'>{emp.ID}</td>
                    <td className='px-6 py-4'>{emp.Name}</td>
                    <td className='px-6 py-4'>{emp.Gender}</td>
                    <td className='px-6 py-4'>{emp.Mobnum}</td>
                    <td className='px-6 py-4'>{formatDate(emp.DOB)}</td>
                    <td className='px-6 py-4'>{emp.Age}</td>
                    <td className='px-6 py-4'>{emp.Email}</td>
                    <td className='px-6 py-4'>{emp.Department}</td>
                    <td className='px-6 py-4'><button
                      onClick={() => handleDelete(emp.ID)}
                      className="bg-red-500 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button></td>

                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </div>


      </div>

    </>
  );
}

export default Emptable
