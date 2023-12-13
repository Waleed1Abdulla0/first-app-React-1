import React from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";

export default function header() {
  return (
    <div>
      <header className="hide-when-mobile">
        <h1>
          <Link to="/"> Waleed Senan </Link>
        </h1>
        <ul className="flex">
          <li className="main-list">
            <NavLink className="main-link" to="/about">
              About Me
            </NavLink>
            <ul className="sub-ul">
              <li>
                <Link to="/about">About Me</Link>
              </li>
              <li>
                <Link to="/about">Education</Link>
              </li>
              <li>
                <Link to="/about">Contact Me</Link>
              </li>
            </ul>
          </li>
          <li className="main-list">
            <NavLink className="main-link" to="/projects">
              Projects
            </NavLink>
            <ul className="sub-ul">
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/projects">Contact Me</Link>
              </li>
              <li className="mini-projects">
                <Link to="/projects">mini projects&nbsp; + </Link>
                <ul className="sub-sub-ul">
                  <li>
                    <Link to="/projects">project 1</Link>
                  </li>
                  <li>
                    <Link to="/projects">project 2</Link>
                  </li>
                  <li>
                    <Link to="/projects">project 3</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="main-list">
            <NavLink className="main-link" to="/contact">
              Contact Me
            </NavLink>
            <ul className="sub-ul sub-of-js">
              <li>
                <Link to="/contact">coming soon🔥</Link>
              </li>
            </ul>
          </li>
        </ul>
      </header>
      <header
        className="show-when-mobile"
        style={{ backgroundColor: "maroon" }}
      >
        <h1>
          <Link to="/"> Waleed Senan </Link>
        </h1>
        <label className="absolute" htmlFor="burger">
          <i className="fas fa-bars" />
        </label>
        <input id="burger" type="checkbox" />
        <div className="show-on-click">
          <div className="main-div">
            <label htmlFor="html">
              About Me <i className="fas fa-plus" />
            </label>
            <input id="html" type="checkbox" />
            <ul className="sub-div">
              <li>
                <Link to="/About">About Me</Link>
              </li>
              <li>
                <Link to="/About">Education</Link>
              </li>
              <li>
                <Link to="/Contact">Contact Me</Link>
              </li>
            </ul>
          </div>
          <div className="main-div">
            <label htmlFor="css">
              Projects <i className="fas fa-plus" />
            </label>
            <input id="css" type="checkbox" />
            <ul className="sub-div">
              <li>
                <Link to="/Projects">Projects</Link>
              </li>
              <li>
                <Link to="/Contact">Contact Me</Link>
              </li>
              <li>
                <label className="mini-projects" htmlFor="mini">
                  Mini Projects <i className="fas fa-plus" />
                </label>
                <input id="mini" type="checkbox" />
                <ul className="sub-sub-div">
                  <li>
                    <Link to="/Projects">Project 1</Link>
                  </li>
                  <li>
                    <Link to="/Projects">Project 2</Link>
                  </li>
                  <li>
                    <Link to="/Projects">Project 3</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="main-div">
            <label htmlFor="js">
              Contact Me
              <i className="fas fa-plus" />
            </label>
            <input id="js" type="checkbox" />
            <ul className="sub-div">
              <li>
                <Link to="/contact">coming soon🔥</Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}
