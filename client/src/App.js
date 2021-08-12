import React, { useEffect, useState } from "react";
import Form from "./components/Form.js";
import "./index.css";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
// import Lashtag from "../src/Lashtag.jpeg";

function App() {
  const [clients, setClients] = useState([]);
  const [procedure, addProcedure] = useState("");
  const [email, addEmail] = useState("");

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
    addProcedure("");
  };

  const handleChange = (e) => {
    setClients(e.target.value);
  };

  const newImage = Image;

  return (
    <div className="App">
      {/* <img src={Lashtag} alt="Lashtag" /> */}
      {/* <img src=“https://i.ibb.co/5YMPWSw/Lashtag.jpg” /> */}

      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact />
        </Switch>
      </Router>
      <button
        onClick={() => {
          console.log("You clicked me!");
        }}
        type="button"
        buttonStyle=""
      >
        Full Set £45
      </button>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Full Name" name="fullname" />
        <br />
        <input type="text" placeholder="Email Address" name="email" />
        <br />
        <input type="text" placeholder="Phone Number" name="number" />
        <br />
        <input type="submit" />
      </form>
      <br />
      <br />
      <button
        onClick={() => {
          console.log("You clicked me!");
        }}
        type="button"
        buttonStyle=""
      >
        Infills £20
      </button>
    </div>
  );
}

export default App;
