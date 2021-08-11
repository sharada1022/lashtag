import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [clients, listClients] = useState([]);
  const [procedure, listProcedure] = useState("");
  const [email, addEmail] = useState("");

  useEffect(() => {
    fetch("/lashtag/clients")
      .then((res) => res.json())
      .then((data) => {
        listClients(data);
      })
      .catch((error) => {
        console.log("FALLEN LASH!", error.message);
      });
  }, []);

  const handleChange = (event) => {
    listClients(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDetfault();

    listClients();
    listProcedure("");
  };

  const addClient = async () => {
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
        listClients(data);
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
      let response = await fetch(`lashtag/clients/${id}`, options);
      if (response.ok) {
        let data = await response.json();
        listClients(data);
      } else {
        console.log(`Sever error ${response.status} ${response.statusClient}`);
      }
    } catch (err) {
      console.log(`Network error: ${err.message}`);
    }
  };

  return (
    <div className="App">
      <button type="button" onClick={(e) => listClients(clients.id)}>
        complete
      </button>

      <form onSubmit={(e) => handleSubmit(e)} />
      <label>
        <input value={clients} onChange={(e) => handleChange(e)} />
        <input value={email} onChange={(e) => handleChange(e)} />
      </label>
    </div>
  );
}

export default App;
