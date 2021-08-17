import React, { useState } from "react";
import "./FullsetView.css";
import FullsetPrice from "./FullsetPrice.png";

// import AppointmentInfo from "./components/AppointmentInfo.jpeg";

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
    e.preventDefault();

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
      {/* <div style={{ backgroundColor: "white" }}> */}
      <br />
      <img src={FullsetPrice} alt="Fullset Price" className="Fullset-Price" />

      <form onSubmit={handleSubmit}>
        Full Name:
        <input type="text" placeholder="" onChange={handleInputChange} />
        <br />
        Email Address:
        <input type="text" placeholder="" onChange={handleInputChange}></input>
        <br />
        Phone Number:
        <input type="text" placeholder="" onChange={handleInputChange}></input>
        <br />
        <button type="submit">Submit</button>
      </form>
      <br />
      <br />

      <h1>Terms and Conditions</h1>
      <br />
      <p>
        Please note...
        <br />
        <br />
        The address will be sent up to a day before your appointment.
        <br />
        <br />
        A £10 non-refundable booking fee is required and the remaining balance
        is due at your appointment in cash.
        <br />
        <br />
        No plus ones.
        <br />
        <br />
        Please inform at least 24 hours prior if you need to cancel/re-schedule
        your appointment for this to be accommodated as best as possible
        (appointment must be within 2 weeks of cancellation or deposit will be
        lost).
        <br />
        <br />
        When attending your booking, please ensure that you are not wearing any
        eye make-up, i.e mascara, eyeliner, strip lashes, eyelash glue residue.
        <br />
        <br />
        <h2>LATENESS AND FEES</h2>
        <br />
        <br />
        There is a 10 minute grace period.
        <br />
        <br />
        Arriving within 10-15 minutes late of your allocated time will incur a
        £5 late fee, which will be applied to your total amount.
        <br />
        <br />
        After 15 minutes there is a £10 charge or your appointment will be
        cancelled.
        <br />
        <br />
        By booking an appointment, you are confirming that you have read,
        understood and agree to the terms and conditions.
        <br />
        <br />
        Thank you for For any other queries, email thelashtag@gmail.com
        <br />
        <br />
        By booking an appointment, you are confirming that you have read,
        understood and agree to the terms and conditions.
        <br />
        <br />
        Thank you for booking💕!
      </p>
      {/* <img src={AppointmentInfo} alt="AppointmentInfo" class="Appointments" /> */}
    </div>
  );
}
