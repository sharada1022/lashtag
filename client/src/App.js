import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Aftercare from "./components/Aftercare.js";
import Lashtag from "../src/Lashtag.jpeg";
import FullsetView from "./components/FullsetView";
import InfillsView from "./components/InfillsView";

function App() {
  const [clients, setClients] = useState([]);
  const [Infills] = useState("");
  const [email] = useState("");

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
          <Route path="/home" component={""} />

          <Route path="/aftercare" component={Aftercare} />

          <Route path="/contactus" component={""} />
        </Switch>
      </Router>
      <img src={Lashtag} alt="Lashtag Logo" />
      <br />

      <button onClick={() => handleChangeView(true)}>Full Set £45 </button>
      <button onClick={() => handleChangeView(false)}>Inflills £20 </button>
      {Infills ? (
        <FullsetView
          addClients={(newClients) => handleAddClients(newClients)}
        />
      ) : (
        <InfillsView allClients={clients} />
      )}

      <text>Terms and Conditions</text>
    </div>
  );
}

export default App;
