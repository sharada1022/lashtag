import React from "react";
import { Link } from "react-router-dom";
// import { FaFire } from "react-icon/fa";
import Button from "./Button";

export default function Pricing() {
  return (
    <div>
      <div className="pricing_section">
        <div className="pricing_wrapper">
          <h1 className="pricing_heading">Pricing</h1>
          <div className="pricing_container">
            <Link to="/sign-up" className="pricing_container-cardInfo">
              <div className="icon"></div>
              <h3>Full Set</h3>
              <h4>£45</h4>
              <p>1.5hr session</p>
              <ul className="pricing_container-feature">
                <li>100 transactions</li>
              </ul>
              <Button buttonSize="btn--wide" buttonColor="primary"></Button>
            </Link>

            <Link to="/sign-up" className="pricing_container-cardInfo">
              <div className="icon"></div>
              <h3>Infills</h3>
              <h4>£20</h4>
              <p>1hr session</p>
              <ul className="pricing_container-feature">
                <li>100 transactions</li>
              </ul>
              <Button buttonSize="btn--wide" buttonColor="primary"></Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
