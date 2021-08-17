import React from "react";
import "../App.css";
import Lashtag from "../components/Lashtag.jpeg";
import AppointmentInfo from "../components/AppointmentInfo.jpeg";
// import LashVolumes from ".components/LashVolumes.jpg";
// import Lashtag from "./components/Lashtag.jpeg";
// import AppointmentInfo from "./components/AppointmentInfo.jpeg";
// import { Card } from "react-bootstrap";
// import { ListGroup } from "react-bootstrap";
// import { ListGroupItem } from "react-bootstrap";

export default function MainView() {
  const cardInfo = [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpweIpBed9rhumzlWoK6qQ92tQJCiUlOBSsA&usqp=CAU",
      title: "Eyelash Extentions",
      text: "Hybrid, Classic, Volume extentions",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/1794/0247/files/tb-eyelash-diagram-001.jpg?v=1601586842",
      title: "Eyelash volumes",
      text: "Eyelash Extensions",
    },
    {
      image:
        "https://youbeautylounge.com/wp-content/uploads/2020/06/Lash-Type-Visual-Example.jpg",
      title: "Lash visuals",
      text: "Visual Examples",
    },
  ];

  return (
    <div className="MainView">
      {/* <img src={LashVolumes} alt="Lash Volumes" /> */}
      <img src={Lashtag} alt="Lashtag Logo" className="Lashtag-Logo" />

      <img
        src={AppointmentInfo}
        alt="Appointment Info"
        className="Appointments"
      />

      {/* <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Title>Full Set Lashes </Card.Title>
          <Card.Text>Choose From:</Card.Text>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Classic Lashes</ListGroupItem>
            <ListGroupItem>Hybrid Lashes</ListGroupItem>
            <ListGroupItem>Volume Lashes</ListGroupItem>
            <ListGroupItem>Mega Volume Lashes</ListGroupItem>
          </ListGroup>

          <button variant="primary">£45</button>
        </Card.Body>
      </Card>

      <br />

      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Infills</Card.Title>
          <Card.Text>Chose from:</Card.Text>
          <ListGroup className="list-group-flush">
            <ListGroupItem> Classic Infill</ListGroupItem>
            <ListGroupItem>Hybrid Infill</ListGroupItem>
            <ListGroupItem>Volume Infill</ListGroupItem>
            <ListGroupItem>Mega Volume Infill</ListGroupItem>
          </ListGroup>

          <button variant="primary">£20</button>
        </Card.Body>
      </Card>

      <div className="terms">
        <Card style={{ width: "18rem" }} />
        <Card.Body>
          <Card.Title>Terms and Conditions</Card.Title>
          <Card.Text>
            Please note...
            <br />
            The address will be sent up to a day before your appointment.
            <br />
            A £10 non-refundable booking fee is required and the remaining
            balance is due at your appointment in cash.
            <br />
            No plus ones.
            <br />
            Please inform at least 24 hours prior if you need to
            cancel/re-schedule your appointment for this to be accommodated as
            best as possible (appointment must be within 2 weeks of cancellation
            or deposit will be lost).
            <br />
            When attending your booking, please ensure that you are not wearing
            any eye make-up, i.e mascara, eyeliner, strip lashes, eyelash glue
            residue.
          </Card.Text>
        </Card.Body>
      </div> */}
    </div>
  );
}
