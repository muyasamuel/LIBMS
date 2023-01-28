import { useNavigate } from "react-router-dom"
import './Navbar.css'
import { Link } from "react-router-dom";

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
          <Link to="/contents">Home</Link>
        </li>
        <li>
          <Link to="/contents/addbook">AddBook</Link>
        </li>
        <li>
          <Link to="/contents/edit">SearchFilter</Link>
        </li>
        <li>
          <Link to="/contents/issuebook">IssueBook</Link>
        </li>
        <li>
          <Link to="/contents/issuedbooks">IssuedBooks</Link>
        </li>
      </ul>

        <div >
            <button onClick={logout} className='logOutBtn'>LogOut</button>
        </div>

    </div>
  )
}

export default Navbar;