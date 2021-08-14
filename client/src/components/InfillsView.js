import React from "react";

export default function InfillsView({ allClients }) {
  return (
    <div>
      Infills
      {allClients.map((clients, i) => (
        <div key={i}></div>
      ))}
    </div>
  );
}
