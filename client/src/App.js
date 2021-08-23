import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Aftercare from "./components/Aftercare.js";
import FullsetView from "./components/FullsetView";
import InfillsView from "./components/InfillsView";
import MainView from "./components/MainView";
import Lashtag from "./components/Lashtag.jpeg";
import AppointmentInfo from "./components/AppointmentInfo.jpeg";
import SignIn from "./components/SignIn";
import BookAppointment from "./components/BookAppointment";
import { useHistory } from 'react-router-dom';
import Payment from "./components/Payment";


function App() {
  const [clients, setClients] = useState([]);
  const [currentView, setCurrentView] = useState("Fullset");

  const [email, setEmail] = useState("");

  const  [user, setUser] = useState([]);//setUser
  const [appointment, setAppointment] = useState([]);
  
  const history = useHistory();


  useEffect(() => {
    fetch("/lashtag")
      .then((res) => res.json())
      .then((data) => {
        setClients(data);
      })
      .catch((error) => {
        console.log("FALLEN LASH!", error.message);
      });
  }, []);

  const handleChangeView = (e) => {
    setClients(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addClients("");
  };

  const handleAddClients = (fullSet) => {
    setClients(fullSet);
  };

  const addClients = async () => {
    let newClient = { name: clients, email, number: true };
    let options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newClient),
    };
    try {
      let response = await fetch("/lashtag", options);
      if (response.ok) {
        let data = await response.json();
        setClients(data);
      } else {
        console.log(`Sever error ${response.status} ${response.statusClient}`);
      }
    } catch (err) {
      console.log(`Network error: ${err.message}`);
    }
  };

  const deleteClient = async (id) => {
    let options = {
      method: "DELETE",
    };

    try {
      let response = await fetch(`/lashtag/${id}`, options);
      if (response.ok) {
        let data = await response.json();
        setClients(data);
      } else {
        console.log(`Sever error ${response.status} ${response.statusClient}`);
      }
    } catch (err) {
      console.log(`Network error: ${err.message}`);
    }
  };

 // adding exisiting user
  useEffect(() => {
    fetch("/users/login")
      .then((res) => res.json())
      .then((data) => {
        //setUser(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
        
  
  useEffect(() => {
    fetch("/appointments")
      .then((res) => res.json())
      .then((data) => {
        setAppointment(data);
        
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

 
  const addAppointment = async (newAppointment) => {
    let options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newAppointment)
    };
     console.log(newAppointment)
      let response = await fetch("/appointments", options);
      
      if (response.ok) {
        console.log("here",newAppointment)
        let data = await response.json();       
        setAppointment(data);
        console.log(history)
        history.push('/payment')//redirect to payment page view
       
      } else {
        console.log(`Sever error ${response.status} ${response.statusClient}`);
      }
    
  };


  return (
    <div>
      {/* <Router> */}
        <Navbar />

        <Switch>
          <Route path="/home" component={MainView} />

          <Route path="/aftercare" component={Aftercare} />

          <Route path="/contactus" component={""} />

          <Route path="/fullset" component={FullsetView} />

          <Route path="/infills" component={InfillsView} />

          <Route path="/signin" component={SignIn} />
          <Route path="/bookappointment"><BookAppointment addAppointment={(e) => addAppointment(e)}/></Route>
          {/* <Route path="/bookappointment" addAppointment={addAppointment} component={BookAppointment} />  */}
          { /*Route path="/bookappointment"  component={()=><BookAppointment addAppointmentCb ={addAppointment}/> */}
 
          <Route path="/payment" component={Payment} />
         
        </Switch>

      {/* </Router> */}

      {/* <img src={Lashtag} alt="Lashtag Logo" class="Lashtag-Logo" /> */}

      <br />

      {/* <img src={AppointmentInfo} alt="Appointment Info" class="Appointments" /> */}

      {/* <box>Full Set £45 </box>

      <button onClick={() => handleChangeView(false)}>Inflills £20 </button> */}

      {/* {currentView === "Fullset" ? (
        <FullsetView
          addClients={(newClients) => handleAddClients(newClients)}
        />
      ) : (
        <InfillsView allClients={clients} />
      )} */}
    </div>
  );
}

export default App;
