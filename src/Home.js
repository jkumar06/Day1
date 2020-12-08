import React from 'react'; 

import { BrowserRouter as Router, Link} from "react-router-dom";
  
function Home (){ 
    return (
    <div>

    <h1>Welcome to Home Page!</h1>      
    <Link to="/Login"  name="Home" id="Home" >Back To LoginPage</Link>
          
    </div>
    )
} 
  
export default Home; 


