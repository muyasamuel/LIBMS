import { Navigate } from 'react-router-dom';
import './LogoutHeader.css'

function LogoutHeader() {

    const logout = () => {
     
         localStorage.removeItem('user');

        
         Navigate('/login');
     
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