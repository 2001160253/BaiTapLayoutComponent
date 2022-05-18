import React, { Component } from "react";
import "./header.css";

class Header extends Component {
  render() {
    return (
      <header>
        <div className="container">
          <div className="row">
            <div className="col-left col">Start Boostrap</div>
            <div className="col-right col">
              <ul>
                <li className="active">Home</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
