import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Aftercare from "./components/Aftercare.js";
import Lashtag from "../src/Lashtag.jpeg";

function App() {
  const [clients, setClients] = useState([]);
  const [procedure, setProcedure] = useState("");
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

  const handleChange = (e) => {
    setClients(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addClients("");
    setProcedure("");
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
    <div className="App">
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
      <ul>
        {clients.map((c) => (
          <li key={c.id}>
            {c.name}
            <br />

            {c.email}
            <br />

            {c.number}
          </li>
        ))}
      </ul>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>
          Full Name:
          <input onChange={(e) => handleChange(e)} />
          <br />
          Email Address:
          <input onChange={(e) => handleChange(e)} />
          <br />
          Phone Number:
          <input onChange={(e) => handleChange(e)} />
        </label>
        <br />
        <button type="Full Set">Full Set</button>
        <button type="Infills">Infills</button>
      </form>
      <br />
    </div>
  );
}

export default App;
