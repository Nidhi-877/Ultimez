import React from 'react'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const Data=localStorage.getItem('user')
  const parsedData = JSON.parse(Data);
  
  const onsubmit=()=>{
   localStorage.removeItem('user');
   toast.success("Logout Success")
    navigate("/")
  }

  return (
    <>
      
      <table className="table">
  <thead>
    <tr>
      <th scope="col">FullName</th>
      <th scope="col">Email</th>
      <th scope="col">Mobile Number</th>
      <th scope="col">Username</th>
      <th scope="col">Country Id</th>
      <th scope="col">Refferal</th>
    </tr>
  </thead>
  <tbody>
    <tr>
     
      <td>{parsedData.message.full_name}</td>
      <td>{parsedData.message.email_id
}</td>
      <td>{parsedData.message.mobile_number
}</td>
      <td>{parsedData.message.username
}</td>
      <td>{parsedData.message.country_row_id}</td>
   
        <td>{parsedData.message.referral_username}</td>
    </tr>
  
  </tbody>
</table>
<div className='logout'>
<button className="button border-0"  type="submit" onClick={onsubmit}>
                        Logout
                      </button>
                      </div>
    </>
  )
}

export default Home
