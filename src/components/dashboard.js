import { useEffect, useState } from 'react';

const Dashboard = () => {
  const [totalEmployees, setTotalEmployees] = useState(0);
  const [totalUser, setTotalUser] = useState(0);
  const [itCount, setItCount] = useState(null);
  const [hrCount, setHrCount] = useState(null);
  const [marketingCount, setMarketingCount] = useState(null);
  const [financeCount, setFinanceCount] = useState(null);

  /***** Count fot total employee data *****/
  useEffect(() => {
    fetch(`http://localhost:8081/employeedata/count`)
      .then(res => res.json())
      .then(data => setTotalEmployees(data.total))
      .catch(err => console.error('Error fetching total:', err));
  }, []);

/***** Count fot HR Dept employee data *****/
  useEffect(() => {
    fetch(`http://localhost:8081/hr-count`)
      .then((res) => res.json())
      .then((data) => {
        setHrCount(data.hrCount);
      })
      .catch((err) => console.error(err));
  }, []);

  /***** Count fot IT Dept employee data *****/
  useEffect(() => {
    fetch(`http://localhost:8081/it-count`)
      .then((res) => res.json())
      .then((data) => {
        setItCount(data.itCount);
      })
      .catch((err) => console.error(err));
  }, []);

  /***** Count fot Finance Dept employee data *****/
  useEffect(() => {
    fetch(`http://localhost:8081/finance-count`)
      .then((res) => res.json())
      .then((data) => {
        setFinanceCount(data.financeCount);
      })
      .catch((err) => console.error(err));
  }, []);

  /***** Count fot Marketing Dept employee data *****/
  useEffect(() => {
    fetch(`http://localhost:8081/marketing-count`)
      .then((res) => res.json())
      .then((data) => {
        setMarketingCount(data.marketingCount);
      })
      .catch((err) => console.error(err));
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
      <div className="m-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">

          <div className="border shadow rounded-lg p-6 text-center hover:scale-105 transition-transform">
            <h2 className="text-x text-gray-700 font-semibold mb-2">Total Employees</h2>
            <p className="text-xl font-bold text-black">{totalEmployees}</p>
          </div>

          <div className="border shadow rounded-lg p-6 text-center hover:scale-105 transition-transform">
            <h2 className="text-x text-gray-700 font-semibold mb-2">HR Dept</h2>
            <p className="text-xl font-bold text-black">{hrCount}</p>
          </div> 

           <div className="border shadow rounded-lg p-6 text-center hover:scale-105 transition-transform">
            <h2 className="text-x text-gray-700 font-semibold mb-2">IT Dept</h2>
            <p className="text-xl font-bold text-black">{itCount}</p>
          </div>  

           <div className="border shadow rounded-lg p-6 text-center hover:scale-105 transition-transform">
            <h2 className="text-x text-gray-700 font-semibold mb-2">Finance Dept</h2>
            <p className="text-xl font-bold text-black">{financeCount}</p>
          </div>  

           <div className="border shadow rounded-lg p-6 text-center hover:scale-105 transition-transform">
            <h2 className="text-x text-gray-700 font-semibold mb-2">Marketing Dept</h2>
            <p className="text-xl font-bold text-black">{marketingCount}</p>
          </div>   

           <div className="border shadow rounded-lg p-6 text-center hover:scale-105 transition-transform">
            <h2 className="text-x text-gray-700 font-semibold mb-2">Total User</h2>
            <p className="text-xl font-bold text-black">{totalUser}</p>
          </div>   
               
      </div>  
    </>
  )
}

export default Dashboard
