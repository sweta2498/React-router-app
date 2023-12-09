import { Link, NavLink, Outlet } from "react-router-dom";

function Contact()
{
   

    return (
    <div className="App">
        <h1>Contact Page...!!</h1>
        <ul className="navbariner">
        <li> <NavLink className='nav-bar-link' to="company">Company </NavLink><br/><br/></li>
        <li> <NavLink className='nav-bar-link' to="channel">Channel </NavLink><br/><br/></li>
        <li> <NavLink className='nav-bar-link' to="other">Other </NavLink><br/><br/></li>
        </ul>
        {/* <Link to='channel'> Channel </Link>
        <Link to='company'> Company </Link>
        <Link to='other'> Other </Link> */}
        <Outlet/>

    </div>);
}

export default Contact;