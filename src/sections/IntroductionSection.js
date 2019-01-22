import React, { Component } from "react";
import Fullpage from "../components/Fullpage";
import data from "../data.json";
import { SocialIcon } from "react-social-icons";

class IntroductionSection extends Component {
  render() {
    return (
      <Fullpage className="first">
        <h1 className="title">{data.title}</h1>
        <div>
          <h2>{data.subtitle}</h2>
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
