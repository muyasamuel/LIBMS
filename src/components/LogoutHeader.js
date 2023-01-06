import { useNavigate } from "react-router-dom"
import './LogoutHeader.css'

function LogoutHeader() {
 const navigate = useNavigate();

    const logout = () => { 
         localStorage.removeItem('user'); 
          return navigate("/login");
    }


  return (
    <div className='logoutHeader'>
        <div >
            <button onClick={logout} className='logOutBtn'>LogOut</button>
        </div>

    </div>
  )
}

export default LogoutHeader;