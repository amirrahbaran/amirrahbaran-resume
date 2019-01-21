import React, { Component } from "react";
import data from "./data.json";
import "./App.css";
import { SocialIcon } from "react-social-icons";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="navigation" />
        <div className="fullpage first">
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
        </div>
        <div className="fullpage second">
          <h3>{data.sections[0].title}</h3>
          <div className="paragraphs">
            {data.sections[0].items.map(p => {
              return <p>{p.content}</p>;
            })}
          </div>
        </div>
        <div className="fullpage third">
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
        </div>
      </div>
    );
  }
}

export default App;
