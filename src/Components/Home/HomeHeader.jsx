import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Homeheader.css";
import LoginDialog from "../login/Login";
const HomeHeader = () => {
  const [open, setOpen] = useState(false);
  const openDialog = () => {
    setOpen(true);
  };

  return (
    <>
      <header className="showcase">
        <div className="showcase-top">
          <img src="./logo/logo.png" alt="logo" />
          <Link to={"/subscription"}>
            <button className="btn-header btn-rounded">Join Now</button>
          </Link>
        </div>
        <div className="showcase-content">
          <p>Welcome!</p>
          <h1>Unlimited movies, TV shows and more</h1>
          <p>Watch anywhere. Cancel anytime.</p>
          <div className="btn-header btn-xl" onClick={() => openDialog()}>
            Get Started &gt;
          </div>
        </div>
      </header>
      <LoginDialog open={open} setOpen={setOpen} />
    </>
  );
};

export default HomeHeader;
