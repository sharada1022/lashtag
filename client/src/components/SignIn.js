import React,{ useState } from "react";

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
    props.loginUser(user)
 //  loginUser(user)
  };

 




return (

<div>SignIn

<form onSubmit={e => handleSubmit(e)}>
<input name = "email" type="text" placeholder="email" onChange={handleInputChange} />
<input name = "password" type="password" placeholder="password" onChange={handleInputChange} />
<button type="submit">login</button>


</form>
</div>
)

}

export default SignIn