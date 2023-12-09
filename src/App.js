
import './App.css';
import {BrowserRouter, Link, Navigate, Route, Routes} from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import NavBar from './component/NavBar';
import User from './component/User';
import Filter from './component/Filter';
import Contact from './component/Contact';
import Other from './component/Other';
import Channel from './component/Channel';
import Company from './component/Company';
import Login from './component/Login';
import Protected from './component/Protected';

function App() {
  return (
    <div className="App">

      <BrowserRouter><br/><br/>
      <NavBar/>

      <Routes>
        <Route path='/' element={<Protected Component={Home} />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/about' element={<Protected Component={About} />}/>
        <Route path='/filter' element={<Protected Component={Filter}/>}/>
        <Route path='/user/:name' element={<User/>}/>
        <Route path='/*' element={<Navigate to='/'/>}/>
        {/* <Route path='/*' element={<h1>404 Page Error...!!!!!!</h1>}/> */}

        <Route path='/contact/' element={<Contact/>}>
          <Route path='other' element={<Other/>}/>
          <Route path='channel' element={<Channel/>}/>
          <Route path='company' element={<Company/>}/>
        </Route>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
