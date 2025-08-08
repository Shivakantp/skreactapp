import { useEffect, useState } from 'react';

const Dashboard = () => {
  const [totalEmployees, setTotalEmployees] = useState(0);
  const [totalUser, setTotalUser] = useState(0);

  /***** Count fot total employee data *****/
  useEffect(() => {
    fetch(`http://localhost:8081/employeedata/count`)
      .then(res => res.json())
      .then(data => setTotalEmployees(data.total))
      .catch(err => console.error('Error fetching total:', err));
  }, []);

  /***** Count fot total signup user *****/
  useEffect(() => {
    fetch(`http://localhost:8081/signuplogin/count`)
      .then(res => res.json())
      .then(data => setTotalUser(data.total))
      .catch(err => console.error('Error fetching total:', err));
  }, []);

  return (
    <>
      {/* <div className="max-w-md mx-auto mt-4 grid grid-cols-2 gap-4"></div> */}
      <div className="m-4 grid grid-cols-3 gap-4">
          <div className="border shadow rounded-lg p-6 text-center">
            <h2 className="text-x text-gray-700 font-semibold mb-2">Total Employees</h2>
            <p className="text-xl font-bold text-black">{totalEmployees}</p>
          </div>

          <div className="border shadow rounded-lg p-6 text-center">
            <h2 className="text-x text-gray-700 font-semibold mb-2">Total User</h2>
            <p className="text-xl font-bold text-black">{totalUser}</p>
          </div>        
      </div>  
    </>
  )
}

export default Dashboard
