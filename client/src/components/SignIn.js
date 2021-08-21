import React,{ useState } from "react";
// import ReactDOM from 'react-dom'

function SignIn( props ) {
  //let input = useState({
    //email: "",
   /// password: ""
  //});

    const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    

    setUser((state) => ({
      ...state,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // let response = props.loginUser(user)
    props.loginUser(user)
    // ReactDOM.render(response, document.getElementById("loginResponse"))
        
 //  loginUser(user)
  };

 

return (

<item>
<div className = "Form">

    <form onSubmit={e => handleSubmit(e)}>
       <table><tr><td>
        <label>
          Email ID:</label></td><td>
          <input name = "email" type="text" placeholder="email" onChange={handleInputChange} />
          </td></tr><tr><td>
        <label>
          Password:</label></td><td>
          <input name = "password" type="password" placeholder="password" onChange={handleInputChange} />
         </td></tr></table>
     <button type="submit">login</button>

     <button type="submit">Cancel</button>
    </form>
</div>
{/* <div id = "loginResponse">This is default text.</div> */}
</item>
)};

export default SignIn;