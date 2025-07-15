import React, { Component } from "react";
import { Link } from "react-router-dom";

export class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-dark ">
          <div className="container-fluid">
            <Link className="navbar-brand text-light" to="/">
              News<span style={{ color: "pink" }}>S</span>atish
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link active text-light"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/about">
                    about
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link text-light" to="/business">
                    business
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/entertainment">
                    entertainment
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/general">
                    general
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link text-light" to="/science">
                    science
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link text-light" to="/sports">
                    sports
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/technology">
                    technology
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link text-light" to="/health">
                    health
                  </Link>
                </li>




              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
