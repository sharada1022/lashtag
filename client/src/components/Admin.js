import React, { useEffect, useState } from "react";


 function Admin(props) {
    const [appointment, setAppointment] = useState([]);
    useEffect(() => {
        fetch("/appointments")
          .then((res) => res.json())
          .then((data) => {
            setAppointment(data);
          })
          .catch((error) => {
            console.log( error);
          });
      }, []);
  
  
      return (
    <div >
      <h1>Administration</h1>
      {
            appointment.map(e =>(
            <li key ={e.id}>{e.date},{e.month},{e.time},{e.type}</li>
                               
            ))
      }
    </div>
  );
}






// function Admin(props){
//     return (
//         <div class = "Admin">
//         <ul>
//             {
//               props.addAppointment.map (e =>(
//               <li key ={e.id}>{e.date},{e.month},{e.time},{e.type}</li>
//               ))
//             }              
//          </ul>     

//         </div>

//     )
// }
export default Admin;