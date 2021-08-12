import React, { useEffect, useState, useForm } from "react";
import Form from "./components/Form.js";
import "./index.css";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Aftercare from "./components/Aftercare.js";

// import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
// import Lashtag from "../src/Lashtag.jpeg";

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

  const addClients = async () => {
    let newClient = { name: clients, email, number: false };
    let options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newClient),
    };
    try {
      let response = await fetch("lashtag", options);
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
      let response = await fetch(`lashtag/${id}`, options);
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

  const handleSubmit = (e) => {
    setClients(e.input.value);

    addClients();
    setProcedure("");
  };

  const handleChange = (e) => {
    setClients(e.target.value);
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

      <br />
      <br />
    </div>
  );
}

export default App;
