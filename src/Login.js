import React from 'react'; 
import { BrowserRouter as Router, Link} from "react-router-dom";
  
  
function Login (){ 
    return (
        <div>
            <h2>Login Page</h2><br/>    
             <div className="login">    
                <form id="login">    
                    <label><b>User Name</b></label>    
                    <input type="text" name="Uname" id="Uname" placeholder="Username" /><br/><br/>    
                    
                    <label><b>Password</b></label>    
                    <input type="Password" name="Pass" id="Pass" placeholder="Password"/><br/><br/>    
                    
                    <Link to="/home"  name="log" id="log" >Log In Here</Link>
                </form>     
            </div>    
        </div>
    ) 
} 
  
export default Login; 