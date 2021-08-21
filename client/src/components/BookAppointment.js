import React,{useState} from "react";
import SignIn from "./SignIn";
import { useHistory } from 'react-router-dom';

function BookAppointment( props ){
    const history = useHistory();
    const [appointment, setAppointment] = useState({
        date: "",
        month: "",
        time:"",
        type:""
      });

    const [user,setUser] = useState(null)

    const handleInputChange = (e) => {
        const value = e.target.value;
        const name = e.target.value;
        //props.addappointment(setAppointment);
    
        setAppointment((state) => ({
          ...state,
          [name]: value,
        }));
      };


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('--props',props)
        props.addAppointmentCb(appointment)
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
<item>
<div>
    
  {user ?<div>BookAppointment  

 <form onSubmit={e=>handleSubmit(e)}>
     <table><tr><td>
       <label>
         Date:</label></td><td>
         <input type="date" placeholder="date" onChange={handleInputChange}/>
         </td></tr><tr><td>
       <label>
         Month:
         </label></td><td>
         <input type="text" placeholder="calender" onChange={handleInputChange}/>
         </td></tr><tr><td>
        <label>
         Time:    
        </label></td><td>   
         <input type="time" placeholder="time" onChange={handleInputChange}/>
         </td></tr><tr><td>
         <label>
         Style: 
         </label></td><td>
         <input type="text" placeholder="Style" onChange={handleInputChange}/>   
         </td></tr></table>
     <button type="submit">Click to pay</button>
  </form>
</div>
:  <SignIn loginUser={loginUser}/>}

</div>
</item>
)}


export default BookAppointment