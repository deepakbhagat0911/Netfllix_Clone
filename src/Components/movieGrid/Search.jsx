import React, { useState, useEffect } from "react";
import "./AllShow";
import { DataState } from "../Context/Context";
import SearchNav from "./SearchNav";
import { Link } from "react-router-dom";
const Search = () => {
  const { state } = DataState();

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const items = state.products;

  const handleInputChange = (value) => {
    setSearchQuery(value);
    const suggested = items.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(suggested);
  };

  return (
    <div className="search">
      <SearchNav
        searchQuery={searchQuery}
        handleInputChange={handleInputChange}
      />
      {/* <div className="search-container">
        <input
          type="text"
          id="search-input"
          value={searchQuery}
          placeholder="Movies,Web Series,Tv Show"
          onChange={(e) => handleInputChange(e.target.value)}
        />
      </div> */}

      <div className="grid-container">
        {suggestions.map((suggestion, index) => (
          <div className="grid-img" key={index}>
            <Link to={`/${suggestion._id}`}>
              <img src={suggestion.thumbnail} alt={suggestion.title} />
            </Link>
          </div>
        ))}
      </div>

      <div className="grid-container">
        {searchResults.length > 0
          ? searchResults.map((flight, index) => (
              <div className="grid-img" key={index}>
                <Link to={`/${flight._id}`}>
                  <img src={flight.thumbnail} alt={flight.title} />
                </Link>
              </div>
            ))
          : items.map((flight, index) => (
              <div className="grid-img" key={index}>
                <Link to={`/${flight._id}`}>
                  <img src={flight.thumbnail} alt={flight.title} />
                </Link>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Search;
