// Importing necessary dependencies and styles
import React from "react";
import "./../App.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FilterSearch } from "../util/redux/Action"; // Importing action creator

// Functional component for the Navbar
function Navbar() {
  const dispatch = useDispatch();

  return (
    <div className="navbar">
      {/* Logo and brand */}
      <div>
        <Link className="home" to={"/"}>
          <img src="https://kalvium.community/images/sidebar-3d-logo.svg" alt="Kalvium Logo" />
          <p>
            <span>Kalvium</span> Books
          </p>
        </Link>
      </div>

      {/* Search bar */}
      <div className="search-div">
        <svg
          width="30px"
          height="64px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* SVG search icon */}
          <path
            d="M11 6C13.7614 6 16 8.23858 16 11M16.6588 16.6549L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        {/* Input for book filtering */}
        <input
          placeholder="Filter your books"
          className="search"
          onChange={(e) => {
            dispatch(FilterSearch(e.target.value)); // Dispatching action on input change
          }}
        />
      </div>

      {/* Register button */}
      <div>
        <Link to={"/register"}>
          <button className="button">Register</button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
