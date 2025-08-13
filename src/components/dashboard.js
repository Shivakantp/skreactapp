import { useEffect, useState } from 'react';
import { FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [totalEmployees, setTotalEmployees] = useState(0);
  const [totalUser, setTotalUser] = useState(0);
  const [signupuser, setSignupUser] = useState([]);
  const [itCount, setItCount] = useState(null);
  const [itEmp, setITEmp] = useState([]);
  const [hrCount, setHrCount] = useState(null);
  const [hrEmp, setHrEmp] = useState([]);
  const [marketingCount, setMarketingCount] = useState(null);
  const [marketingEmp, setMarketingEmp] = useState([]);
  const [financeCount, setFinanceCount] = useState(null);
  const [financeEmp, setFinanceEmp] = useState([]);
  const [showModal_SignUser, setShowModal_SignUser] = useState(false);
  const [showModal_HR, setShowModal_HR] = useState(false);
  const [showModal_IT, setShowModal_IT] = useState(false);
  const [showModal_Marketing, setShowModal_Marketing] = useState(false);
  const [showModal_Finance, setShowModal_Finance] = useState(false);

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

  useEffect(() => {
    if (showModal_HR) {
      fetch("http://localhost:8081/hr-employees")
        .then((res) => res.json())
        .then((data) => {
          console.log("HR Department:", data); // check format
          setHrEmp(Array.isArray(data) ? data : []);
        })
        .catch((err) => console.error(err));
    }
  }, [showModal_HR]);

  /***** Count fot IT Dept employee data *****/
  useEffect(() => {
    fetch(`http://localhost:8081/it-count`)
      .then((res) => res.json())
      .then((data) => {
        setItCount(data.itCount);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    if (showModal_IT) {
      fetch("http://localhost:8081/it-employees")
        .then((res) => res.json())
        .then((data) => {
          console.log("IT Department:", data); // check format
          setITEmp(Array.isArray(data) ? data : []);
        })
        .catch((err) => console.error(err));
    }
  }, [showModal_IT]);

  /***** Count fot Finance Dept employee data *****/
  useEffect(() => {
    fetch(`http://localhost:8081/finance-count`)
      .then((res) => res.json())
      .then((data) => {
        setFinanceCount(data.financeCount);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    if (showModal_Finance) {
      fetch("http://localhost:8081/finance-employees")
        .then((res) => res.json())
        .then((data) => {
          console.log("Finance Department:", data); // check format
          setFinanceEmp(Array.isArray(data) ? data : []);
        })
        .catch((err) => console.error(err));
    }
  }, [showModal_Finance]);

  /***** Count fot Marketing Dept employee data *****/
  useEffect(() => {
    fetch(`http://localhost:8081/marketing-count`)
      .then((res) => res.json())
      .then((data) => {
        setMarketingCount(data.marketingCount);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    if (showModal_Marketing) {
      fetch("http://localhost:8081/marketing-employees")
        .then((res) => res.json())
        .then((data) => {
          console.log("Marketing Department:", data); // check format
          setMarketingEmp(Array.isArray(data) ? data : []);
        })
        .catch((err) => console.error(err));
    }
  }, [showModal_Marketing]);

  /***** Count fot total signup user *****/
  useEffect(() => {
    fetch(`http://localhost:8081/signuplogin/count`)
      .then(res => res.json())
      .then(data => setTotalUser(data.total))
      .catch(err => console.error('Error fetching total:', err));
  }, []);

  useEffect(() => {
    if (showModal_SignUser) {
      fetch("http://localhost:8081/signup-user")
        .then((res) => res.json())
        .then((data) => {
          console.log("Signup User:", data); // check format
          setSignupUser(Array.isArray(data) ? data : []);
        })
        .catch((err) => console.error(err));
    }
  }, [showModal_SignUser]);

  /***** Date Format *****/
  const formatDate = (isoString) => {
    const date = new Date(isoString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  return (
    <>
    <div style={{fontWeight:"500",color:"#474747",
                margin:'10px',paddingBottom:'10px',borderBottom:'1px solid #d5d5d5'}}>Dashboard</div>
      <div className="m-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">

        <Link to='/emptable'>
          <div className="border shadow rounded-lg p-6 text-center hover:scale-105 transition-transform">
            <h2 className="text-x text-gray-700 font-semibold mb-2">Total Employees</h2>
            <p className="text-xl font-bold text-black">{totalEmployees}</p>
          </div>
        </Link>

        <div className="border shadow rounded-lg p-6 text-center hover:scale-105 transition-transform cursor-pointer" onClick={() => setShowModal_HR(true)}>
          <h2 className="text-x text-gray-700 font-semibold mb-2">HR Dept</h2>
          <p className="text-xl font-bold text-black">{hrCount}</p>
        </div>
        {/***** Popup Modal For HR Department *****/}
        {showModal_HR && (
          <div className="modal-overlay" onClick={() => setShowModal_HR(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div>
                <span style={{fontWeight:"bold",color:"#474747"}}>HR Dept</span>
                <span style={{ float: "right", cursor: "pointer" }} className="close-btn" onClick={() => setShowModal_HR(false)}>
                  <FaTimes />
                </span>
              </div>
              <div className="my-4 mx-1 bg-white-100">
                {/* <div className='heading'>Employee Details</div> */}
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

                        </tr>
                      </thead>

                      {hrEmp.map(hr_emp => (
                        <tbody className='bg-white divide-y divide-gray-200'>
                          <tr key={hr_emp.ID} className='hover:bg-gray-100 transition-colors duration-200'>
                            <td className='px-6 py-4'>{hr_emp.ID}</td>
                            <td className='px-6 py-4'>{hr_emp.Name}</td>
                            <td className='px-6 py-4'>{hr_emp.Gender}</td>
                            <td className='px-6 py-4'>{hr_emp.Mobnum}</td>
                            <td className='px-6 py-4'>{formatDate(hr_emp.DOB)}</td>
                            <td className='px-6 py-4'>{hr_emp.Age}</td>
                            <td className='px-6 py-4'>{hr_emp.Email}</td>
                            <td className='px-6 py-4'>{hr_emp.Department}</td>
                          </tr>
                        </tbody>
                      ))}
                    </table>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

        <div className="border shadow rounded-lg p-6 text-center hover:scale-105 transition-transform cursor-pointer" onClick={() => setShowModal_IT(true)}>
          <h2 className="text-x text-gray-700 font-semibold mb-2">IT Dept</h2>
          <p className="text-xl font-bold text-black">{itCount}</p>
        </div>
        {/***** Popup Modal For IT Department *****/}
        {showModal_IT && (
          <div className="modal-overlay" onClick={() => setShowModal_IT(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div>
                <span style={{fontWeight:"bold",color:"#474747"}}>IT Dept</span>
                <span style={{ float: "right", cursor: "pointer" }} className="close-btn" onClick={() => setShowModal_IT(false)}>
                  <FaTimes />
                </span>
              </div>
              <div className="my-4 mx-1 bg-white-100">
                {/* <div className='heading'>Employee Details</div> */}
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

                        </tr>
                      </thead>

                      {itEmp.map(it_emp => (
                        <tbody className='bg-white divide-y divide-gray-200'>
                          <tr key={it_emp.ID} className='hover:bg-gray-100 transition-colors duration-200'>
                            <td className='px-6 py-4'>{it_emp.ID}</td>
                            <td className='px-6 py-4'>{it_emp.Name}</td>
                            <td className='px-6 py-4'>{it_emp.Gender}</td>
                            <td className='px-6 py-4'>{it_emp.Mobnum}</td>
                            <td className='px-6 py-4'>{formatDate(it_emp.DOB)}</td>
                            <td className='px-6 py-4'>{it_emp.Age}</td>
                            <td className='px-6 py-4'>{it_emp.Email}</td>
                            <td className='px-6 py-4'>{it_emp.Department}</td>
                          </tr>
                        </tbody>
                      ))}
                    </table>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

        <div className="border shadow rounded-lg p-6 text-center hover:scale-105 transition-transform cursor-pointer" onClick={() => setShowModal_Finance(true)}>
          <h2 className="text-x text-gray-700 font-semibold mb-2">Finance Dept</h2>
          <p className="text-xl font-bold text-black">{financeCount}</p>
        </div>
        {/***** Popup Modal For Finance Department *****/}
        {showModal_Finance && (
          <div className="modal-overlay" onClick={() => setShowModal_Finance(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div>
                <span style={{fontWeight:"bold",color:"#474747"}}>Finance Dept</span>
                <span style={{ float: "right", cursor: "pointer" }} className="close-btn" onClick={() => setShowModal_Finance(false)}>
                  <FaTimes />
                </span>
              </div>
              <div className="my-4 mx-1 bg-white-100">
                {/* <div className='heading'>Employee Details</div> */}
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

                        </tr>
                      </thead>

                      {financeEmp.map(finance_emp => (
                        <tbody className='bg-white divide-y divide-gray-200'>
                          <tr key={finance_emp.ID} className='hover:bg-gray-100 transition-colors duration-200'>
                            <td className='px-6 py-4'>{finance_emp.ID}</td>
                            <td className='px-6 py-4'>{finance_emp.Name}</td>
                            <td className='px-6 py-4'>{finance_emp.Gender}</td>
                            <td className='px-6 py-4'>{finance_emp.Mobnum}</td>
                            <td className='px-6 py-4'>{formatDate(finance_emp.DOB)}</td>
                            <td className='px-6 py-4'>{finance_emp.Age}</td>
                            <td className='px-6 py-4'>{finance_emp.Email}</td>
                            <td className='px-6 py-4'>{finance_emp.Department}</td>
                          </tr>
                        </tbody>
                      ))}
                    </table>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

        <div className="border shadow rounded-lg p-6 text-center hover:scale-105 transition-transform cursor-pointer" onClick={() => setShowModal_Marketing(true)}>
          <h2 className="text-x text-gray-700 font-semibold mb-2">Marketing Dept</h2>
          <p className="text-xl font-bold text-black">{marketingCount}</p>
        </div>
        {/***** Popup Modal For Marketing Department *****/}
        {showModal_Marketing && (
          <div className="modal-overlay" onClick={() => setShowModal_Marketing(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div>
                <span style={{fontWeight:"bold",color:"#474747"}}>Marketing Dept</span>
                <span style={{ float: "right", cursor: "pointer" }} className="close-btn" onClick={() => setShowModal_Marketing(false)}>
                  <FaTimes />
                </span>
              </div>
              <div className="my-4 mx-1 bg-white-100">
                {/* <div className='heading'>Employee Details</div> */}
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

                        </tr>
                      </thead>

                      {marketingEmp.map(marketing_emp => (
                        <tbody className='bg-white divide-y divide-gray-200'>
                          <tr key={marketing_emp.ID} className='hover:bg-gray-100 transition-colors duration-200'>
                            <td className='px-6 py-4'>{marketing_emp.ID}</td>
                            <td className='px-6 py-4'>{marketing_emp.Name}</td>
                            <td className='px-6 py-4'>{marketing_emp.Gender}</td>
                            <td className='px-6 py-4'>{marketing_emp.Mobnum}</td>
                            <td className='px-6 py-4'>{formatDate(marketing_emp.DOB)}</td>
                            <td className='px-6 py-4'>{marketing_emp.Age}</td>
                            <td className='px-6 py-4'>{marketing_emp.Email}</td>
                            <td className='px-6 py-4'>{marketing_emp.Department}</td>
                          </tr>
                        </tbody>
                      ))}
                    </table>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

        <div className="border shadow rounded-lg p-6 text-center hover:scale-105 transition-transform cursor-pointer" onClick={() => setShowModal_SignUser(true)}>
          <h2 className="text-x text-gray-700 font-semibold mb-2">Total User</h2>
          <p className="text-xl font-bold text-black">{totalUser}</p>
        </div>
        {/***** Popup Modal For SignUser *****/}
        {showModal_SignUser && (
          <div className="modal-overlay" onClick={() => setShowModal_SignUser(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div>
                <span style={{fontWeight:"bold",color:"#474747"}}>All Users</span>
                <span style={{ float: "right", cursor: "pointer" }} className="close-btn" onClick={() => setShowModal_SignUser(false)}>
                  <FaTimes />
                </span>
              </div>
              <div className="my-4 mx-1 bg-white-100">
                {/* <div className='heading'>Employee Details</div> */}
                <div className='rounded-md border'>
                  <div className='overflow-auto'>
                    <table className='min-w-full divide-y divide-gray-200 text-sm text-left text-gray-600'>
                      <thead className='font-bold bg-gray-100 text-gray-700 uppercase text-xs'>
                        <tr>
                          <td className="px-6 py-3">ID</td>
                          <td className="px-6 py-3">User-Name</td>
                          <td className="px-6 py-3">Email</td>
                          <td className="px-6 py-3">Password</td>

                        </tr>
                      </thead>

                      {signupuser.map(signup_user => (
                        <tbody className='bg-white divide-y divide-gray-200'>
                          <tr key={signup_user.ID} className='hover:bg-gray-100 transition-colors duration-200'>
                            <td className='px-6 py-4'>{signup_user.ID}</td>
                            <td className='px-6 py-4'>{signup_user.UserName}</td>
                            <td className='px-6 py-4'>{signup_user.Email}</td>
                            <td className='px-6 py-4'>{signup_user.Password}</td>
                          </tr>
                        </tbody>
                      ))}
                    </table>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

      </div>
    </>
  )
}

export default Dashboard
