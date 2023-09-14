import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="hero-container">
          <div className="hero-img">
            <img
              src="https://netflix-images.manikantp.repl.co/Netflix1.gif"
              alt="image"
            />
          </div>
          <div className="hero-text">
            <h2>Enjoy on your TV</h2>
            <p>
              Watch on smart TVs, PlayStation,
              <br /> Xbox, Chromecast, Apple TV, Blu-ray
              <br /> players and more.
            </p>
          </div>
        </div>
      </div>

      <div className="hero small-sreen">
        <div className="hero-container">
          <div className="hero-text">
            <h2>Watch everywhere</h2>
            <p>
              Stream unlimited movies and TV shows on your <br />
              phone, tablet, laptop, and TV.
            </p>
          </div>
          <div className="hero-img">
            <img src="./Hero_img/Hero3.jpg" alt="image" />
          </div>
        </div>
      </div>
      <div className="hero">
        <div className="hero-container">
          <div className="hero-img">
            <img src="./Hero_img/Netflix2.gif" alt="image" />
          </div>
          <div className="hero-text">
            <h2>
              Download your shows to <br />
              watch offline
            </h2>
            <p>
              Save your favourites easily and always <br />
              have something to watch.
            </p>
          </div>
        </div>
      </div>
      <div className="hero small-sreen">
        <div className="hero-container">
          <div className="hero-img">
            <img src="./Hero_img/Hero4.png" alt="image" />
          </div>
          <div className="hero-text">
            <h2>Create profiles for kids</h2>
            <p>
              Send children on adventures with their favourite
              <br /> characters in a space made just for them—free
              <br /> with your membership.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
