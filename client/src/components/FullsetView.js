import React, { useState } from "react";

// import Lashtag from "./components/Lashtag.jpeg";

export default function FullsetView({ props }) {
  const [clients, setInputClients] = useState({
    name: "",
    email: "",
    number: "",
  });

  const handleInputChange = (e) => {
    const value = e.target.value;
    const name = e.target.value;
    props.addClients(setInputClients);

    setInputClients((state) => ({
      ...state,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="FullsetView">
      {/* <img src={Lashtag} alt="Lashtag Logo" /> */}
      <div style={{ backgroundColor: "white" }}>
        <form onSubmit={(e) => handleSubmit(e)}>
          <label>
            Full Name
            <input
              name="fullname"
              value={clients.name}
              onChange={handleInputChange}
            />
          </label>

          <br />

          <label>
            Email Address
            <input
              name="email"
              value={clients.email}
              onChange={handleInputChange}
            ></input>
          </label>

          <br />

          <label>
            Phone Number
            <input
              name="number"
              value={clients.number}
              onChange={handleInputChange}
            ></input>
          </label>

          <br />

          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}
