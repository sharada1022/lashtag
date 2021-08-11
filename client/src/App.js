import React, { useEffect, useState } from "react";
import Form from "./components/Form.js";
import "./index.css";

function App() {
  const [clients, listClients] = useState([]);
  const [procedure, listProcedure] = useState("");
  const [email, addEmail] = useState("");

  useEffect(() => {
    fetch("/lashtag")
      .then((res) => res.json())
      .then((data) => {
        listClients(data);
      })
      .catch((error) => {
        console.log("FALLEN LASH!", error.message);
      });
  }, []);

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
      let response = await fetch(`lashtag/${id}`, options);
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

  const onChange = (updatedValue) => {
    this.setState({
      clients: {
        ...this.state.clients,
        ...updatedValue,
      },
    });
  };

  return (
    <div className="App">
      <button
        onClick={() => {
          console.log("You clicked me!");
        }}
        type="button"
        buttonStyle=""
      >
        Full Set 45
      </button>

      <button
        onClick={() => {
          console.log("You clicked me!");
        }}
        type="button"
        buttonStyle=""
      >
        Infills 20
      </button>

      <Form onChange={(clients) => this.onSubmit(clients)} />
      <p>{JSON.stringify(this.state.clients)}</p>
    </div>
  );
}

export default App;
