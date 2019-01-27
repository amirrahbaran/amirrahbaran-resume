import React, { Component } from "react";
import Fullpage from "../components/Fullpage";
import data from "../data.json";
import SkillCard from "../components/SkillCard";

import "./SkillSection.css";

class SkillSection extends Component {
  render() {
    return (
      <Fullpage id={data.sections[1].title} className="third">
        <h3>{data.sections[1].title}</h3>
        <div className="cards-wrapper">
          {data.sections[1].items.map(eachSkill => (
            <SkillCard skill={eachSkill} />
          ))}
        </div>
      </Fullpage>
    );
  }
}

export default SkillSection;
