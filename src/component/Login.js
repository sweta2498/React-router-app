import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function Login()
{
    const login=()=>{
        localStorage.setItem('login',true)
        navigate('/');
    }
    const navigate=useNavigate();
    useEffect(()=>{
        let login=localStorage.getItem('login');
        if(login){
            navigate('/');
        }
    }); 
    return(
        <div className="App">
            <h1>Login Page..!!!!</h1>
            <label>User Name : </label>
            <input type="text" /><br/><br/>
            <label>Password : </label>
            <input type="password" /><br/><br/>
            <button onClick={login}>Login</button>

        </div>
    )
}
export default Login;