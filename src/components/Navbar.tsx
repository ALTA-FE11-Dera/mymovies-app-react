import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar bg-primary text-primary-content sticky">
        <div className="navbar-start">
          <Link
            to="/"
            className="btn btn-ghost normal-case text-xl font-Display"
          >
            CINEMAXI
          </Link>
        </div>
        <div className="navbar-center">
          <a className="form-control">
            <input
              type="text"
              placeholder="Seacrh"
              className="input input-bordered w-full max-w-xs"
            />
          </a>
        </div>
        <div className="navbar-end">
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1 menu-item">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/favorite">Favorite</Link>
              </li>
            </ul>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://placeimg.com/80/80/people" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 menu-dropdown-item"
            >
              <li>
                <a className="justify-between">Profile</a>
              </li>
              <li className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text">Dark Mode</span>
                  <input type="checkbox" className="toggle" checked />
                </label>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
