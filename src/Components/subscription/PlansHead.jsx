import React from "react";
import "./subscription.css";
import { Link } from "react-router-dom";
const PlansHead = () => {
  return (
    <div>
      <div className="plan-head">
        <div className="plan-logo">
          <Link to={"/"}>
            <img src="./logo/logo.png" alt="" />
          </Link>
        </div>
        <div className="plan-button">
          <Link to={"/"}>
            <button>Sign in</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PlansHead;
