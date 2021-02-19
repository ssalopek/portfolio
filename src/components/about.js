import React from "react";

export default class About extends React.Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src={resumeData.imagebaseurl} alt="" />
          </div>
          <div className="nine columns main-col">
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>
                    {resumeData.name} {resumeData.surname}
                  </span>
                  <br></br>
                  <span>{resumeData.address}</span>
                </p>
              </div>
              <h2>Check my CV</h2>
              <p className="adress">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://drive.google.com/file/d/14kGyzNIWULmb4IZXIjlXfAeh3e8HnwX4/view?usp=sharing"
                >
                  <img src={resumeData.croIcon} width="35" height="35"></img>
                </a>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://drive.google.com/file/d/1hDsMQB805KxxVua5rs2cT1XY4FdTN5co/view?usp=sharing"
                >
                  <img src={resumeData.engIcon} width="35" height="35"></img>
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
