import { useNavigate } from "react-router-dom";

function Home()
{
    const navigate=useNavigate();
    return<>
    <h1>Home Pageee..!!!</h1><br /><br/>
    <button onClick={()=>navigate('/about')}>Go to About</button><br /><br/>
    <button onClick={()=>navigate('./filter')}>Go to Filter</button><br /><br/>
    </>
}

export default Home;