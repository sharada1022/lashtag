import React, { useState } from "react";

function MainView({ allClients }) {
  const [clients, setClients] = useState({
    name: "",
    email: "",
    number: "",
  });

  const handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    setClients((state) => ({
      ...state,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    allClients(clients);
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>
          Full View
          <input name="" value={clients.name} onChange={handleInputChange} />
        </label>

        {/* <label>
          Lashtag Image
          <input
            name="Lashtag.jpeg"
            value={Lashtag}
            onChange={handleInputChange}
          />
        </label> */}

        <button>Submit</button>
      </form>
    </div>
  );
}

export default MainView;
