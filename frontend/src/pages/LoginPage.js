import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext';
import { FaGoogle,FaUser,FaLock } from 'react-icons/fa';

const LoginPage = () => {
  let { loginUser } = useContext(AuthContext);
  return (
    <div  style={{
      paddingTop: '200px',
      boxSizing: 'content-box',
    }}>
          <div className="outer">
          <div className="inner">
  
  <form onSubmit={loginUser}>

<h3>LOG IN</h3>
&nbsp;
&nbsp;
<div className="form-group">
    <label>Username <FaUser/></label>
    <input type="text" name='username' className="form-control" placeholder="Enter email" required/>
</div>
&nbsp;
&nbsp;
<div className="form-group">
    <label>Password <FaLock/> </label>
    <input type="password" name='password' className="form-control" placeholder="Enter password" required />
</div>
&nbsp;
&nbsp;

 <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button> 
 <p className="forgot-password text-right">
  <b>SIGN IN WITH GOOGLE &nbsp; <FaGoogle/> </b>
  
</p>
</form> 

</div>
</div>

      
    </div>
  )
}

export default LoginPage