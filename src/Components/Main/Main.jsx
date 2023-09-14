import React, { useState, useEffect } from "react";
import Row from "./Row";
import { DataState } from "../Context/Context";
import "./Main.css";
import NavBar from "./NavBar";
import BannerCard from "./Banner";
import { auth } from "../../firebase";

const Main = () => {
  const { state, loading } = DataState();
  const [profile, setProfile] = useState("");
  const products = state.products;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  auth.onAuthStateChanged((user) => {
    setProfile(user.displayName);
  });
  return (
    <>
      <NavBar profile={profile} />

      <div style={{ background: "#000" }}>
        <BannerCard />
        <div style={{ background: "#181818" }}>
          <Row data={products} title={"NETFLIX ORIGINAL"} query={"trailer"} />
          <Row data={products} title={"web Series"} query={"web series"} />
          <Row data={products} title={"Tv Show"} query={"tv show"} />
          <Row data={products} title={"Short Film"} query={"short film"} />
          <Row data={products} title={"Movies"} query={"movie"} />
          <Row data={products} title={"Documentary"} query={"documentary"} />
          <Row data={products} title={"Video Song's"} query={"video song"} />
        </div>
      </div>
    </>
  );
};

export default Main;
