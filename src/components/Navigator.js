import React, { Component } from "react";
import data from "../data.json";

import "./Navigator.css";

class Navigator extends Component {
  render() {
    return (
      <div className="nav">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          {data.sections.map(eachSection => (
            <li>
              <a href={`#${eachSection.title}`}>{eachSection.title}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Navigator;
