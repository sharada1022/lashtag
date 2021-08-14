import React from "react";

export default function fullsetView({ props }) {
  const [clients, setInputClients] = {
    name: "",
    email: "",
    number: "",
  };

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
    <div>
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
          <textarea
            name="email"
            value={clients.email}
            onChange={handleInputChange}
          ></textarea>
        </label>
        <br />
        <label>
          Phone Number
          <textarea
            name="number"
            value={clients.number}
            onChange={handleInputChange}
          ></textarea>
        </label>

        <button>Submit</button>
      </form>
    </div>
  );
}
