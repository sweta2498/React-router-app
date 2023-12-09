import { useParams } from "react-router-dom";

function User()
{
    const params=useParams();
    const{name}=params;
    return <>
        <h1>User Pagee...!!!</h1>
        <h1>Page {name} open..!!!</h1>
    </>
}

export default User;