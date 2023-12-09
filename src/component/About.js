import { Link } from "react-router-dom";

function About()
{
    return<>
    <h1>About Pageee</h1>
    

    <Link to="/user/react">React </Link><br/><br/>
      <Link to="/user/js">JSS </Link><br/><br/>
      <Link to="/user/Devloper">Devloper</Link><br/><br/>
    </>
}

export default About;