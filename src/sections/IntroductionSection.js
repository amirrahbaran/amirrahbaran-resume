import React, { Component } from "react";
import Fullpage from "../components/Fullpage";
import data from "../data.json";
import { SocialIcon } from "react-social-icons";

import "./IntroductionSection.css";

class IntroductionSection extends Component {
  render() {
    return (
      <Fullpage id="home" className="first">
        <h1 className="title">{data.title}</h1>
        <div>
          <h2 className="subtitle">{data.subtitle}</h2>
        </div>
        <div className="icons-wrapper">
          {Object.keys(data.links).map(key => {
            return (
              <div className="icon">
                <SocialIcon url={data.links[key]} />
              </div>
            );
          })}
        </div>
      </Fullpage>
    );
  }
}

export default IntroductionSection;
