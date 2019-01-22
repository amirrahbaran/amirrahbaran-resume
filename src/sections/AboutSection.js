import React, { Component } from "react";
import data from "../data.json";
import Fullpage from "../components/Fullpage.js";

class AboutSection extends Component {
  render() {
    return (
      <Fullpage className='second'>
        <h3>{data.sections[0].title}</h3>
        <div className="paragraphs">
          {data.sections[0].items.map(p => {
            return <p>{p.content}</p>;
          })}
        </div>
      </Fullpage>
    );
  }
}

export default AboutSection;
