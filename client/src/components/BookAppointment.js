import React,{useState} from "react";
import SignIn from "./SignIn";

function BookAppointment({ props }){

    const [appointment, setAppointment] = useState({
        date: "",
        month: "",
        time:"",
      });
const [user,setUser] = useState(null)

      const handleInputChange = (e) => {
        const value = e.target.value;
        const name = e.target.value;
        props.addappointment(setAppointment);
    
        setAppointment((state) => ({
          ...state,
          [name]: value,
        }));
      };

      const handleSubmit = (e) => {
        e.preventDefault();

      };
      const loginUser = async (loginInfo) => {
   
        let options = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(loginInfo),
        };
        try {
          let response = await fetch("/users/login", options);
          if (response.ok) {
            let data = await response.json();
            setUser(data);
          } else {
            console.log(`Sever error ${response.status} ${response.statusClient}`);
          }
        } catch (err) {
          console.log(`Network error: ${err.message}`);
        }
      };
    debugger

return (
<div>
    {user ?<div>BookAppointment

<form onSubmit={handleSubmit}>

<input type="text" placeholder="date" onChange={handleInputChange}/>
<input type="text" placeholder="month" onChange={handleInputChange}/>
<input type="text" placeholder="time" onChange={handleInputChange}/>
<button type="submit">Submit</button>
</form>

</div>
:  <SignIn loginUser={loginUser}/>
}
</div>
)}


export default BookAppointment