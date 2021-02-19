import React from "react";
import { SkillBars } from "react-skills";

export default class Resume extends React.Component {
  render() {
    let resumeData = this.props.resumeData;

    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>
          <div className="nine columns main-col">
            {resumeData.education &&
              resumeData.education.map((item) => {
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      <h4>{item.university}</h4>
                      <p className="info">
                        {item.specialization}
                        <span>&bull;</span>
                        <em className="date">{item.year}</em>
                      </p>
                      <p>
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item.degree}
                        </a>
                      </p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Certifications</span>
            </h1>
          </div>
          <div className="nine columns main-col">
            {resumeData.certifications &&
              resumeData.certifications.map((item) => {
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      <h4>{item.name}</h4>
                      <p className="info">
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item.description}
                        </a>

                        <span>&bull;</span>
                        <em className="date">{item.year}</em>
                      </p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <hr></hr>
        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>
          <div className="nine columns main-col">
            <SkillBars skills={resumeData.skills} />
          </div>
        </div>
      </section>
    );
  }
}
