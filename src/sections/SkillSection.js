import React, { Component } from "react";
import Fullpage from "../components/Fullpage";
import data from "../data.json";

class SkillSection extends Component {
  render() {
    return (
      <Fullpage className="third">
        <h3>{data.sections[1].title}</h3>
        <div className="cards-wrapper">
          {data.sections[1].items.map(skill => {
            return (
              <div className="card">
                <div className="image-wrapper">
                  <img src={skill.content.image} alt={skill.content.title} />
                </div>
                <div className="skill-title-wrapper">
                  <h4>{skill.content.title}</h4>
                </div>
              </div>
            );
          })}
        </div>
      </Fullpage>
    );
  }
}

export default SkillSection;
