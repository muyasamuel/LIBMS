import { useNavigate } from "react-router-dom"
import './Navbar.css'
import { NavLink } from "react-router-dom";

function Navbar() {
 const navigate = useNavigate();

    const logout = () => { 
         localStorage.removeItem('user'); 
          return navigate("/login");
    }
    

  return (
    <div className='header'>
      <ul>
        <li>
          <NavLink to="/contents">Home</NavLink>
        </li>
        <li>
          <NavLink to="/contents/addbook">AddBook</NavLink>
        </li>
        <li>
          <NavLink to="/contents/edit">SearchFilter</NavLink>
        </li>
        <li>
          <NavLink to="/contents/issuebook">IssueBook</NavLink>
        </li>
        <li>
          <NavLink to="/contents/issuedbooks">IssuedBooks</NavLink>
        </li>
      </ul>

        <div >
            <button onClick={logout} className='logOutBtn'>LogOut</button>
        </div>

    </div>
  )
}

export default Navbar;