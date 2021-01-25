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
            </div>
          </div>
        </div>
      </section>
    );
  }
}
