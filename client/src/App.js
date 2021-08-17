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

function App() {
  const [clients, setClients] = useState([]);
  const [currentView, setCurrentView] = useState("Fullset");

  const [email, setEmail] = useState("");

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

  return (
    <div>
      <Router>
        <Navbar />

        <Switch>
          <Route path="/home" component={MainView} />

          <Route path="/aftercare" component={Aftercare} />

          <Route path="/contactus" component={""} />

          <Route path="/fullset" component={FullsetView} />

          <Route path="/infills" component={InfillsView} />
        </Switch>
      </Router>

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
