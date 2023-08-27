import React, { useState, useEffect } from "react";
import "./AllShow.css";
import { DataState } from "../Context/Context";
import NavBar from "../Main/NavBar";
import { Link } from "react-router-dom";
const AllShow = () => {
  const { state, loading } = DataState();
  const [selectedType, setSelectedType] = useState("");
  const products = state.products;
  const filteredProducts = selectedType
    ? products.filter((item) => item.type === selectedType)
    : products;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <NavBar />
      <div className="grid">
        <div className="grid-box">
          <div className="filter">
            <select
              id="typeFilter"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
            >
              <option value="">All</option>
              <option value="web series">Web Series</option>
              <option value="movie">Movies</option>
              <option value="tv show">Tv Show</option>
              <option value="short film">Short Film</option>
              <option value="documentary">Documentary</option>
              <option value="video song">Video Song's</option>
            </select>
          </div>
          <div className="grid-container">
            {filteredProducts.map((item) => {
              return (
                <div className="grid-img">
                  <Link to={`/${item._id}`}>
                    <img src={item.thumbnail} alt="image" key={item._id} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllShow;
