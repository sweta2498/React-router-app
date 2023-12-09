import { Link,NavLink } from "react-router-dom";

function NavBar()
{
    return<>
    
    <ul className="navbar">
      <li> <NavLink className='nav-bar-link' to="/">Home </NavLink><br/><br/></li>
      <li> <NavLink className='nav-bar-link' to="/about">About </NavLink><br/><br/></li>
      <li> <NavLink className='nav-bar-link' to="/contact">Contact </NavLink><br/><br/></li>
      <li> <NavLink className='nav-bar-link' to="/filter">Filter </NavLink><br/><br/></li>
      <li> <NavLink className='nav-bar-link' to="/login">Login </NavLink><br/><br/></li>
      {/* <Link to="/user/react">React </Link><br/><br/>
      <Link to="/user/js">JSS </Link><br/><br/>
      <Link to="/user/Devloper">Devloper</Link><br/><br/> */}
    </ul>
      
    </>
}

export default NavBar;