import React from "react";

export default class Portfolio extends React.Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>My projects</h1>
            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
              alt=""
            >
              {resumeData.portfolio &&
                resumeData.portfolio.map((item) => {
                  return (
                    <div className="columns portfolio-item">
                      <div className="portfolio-item-meta">
                        <h5>{item.name}</h5>
                      </div>
                      <div className="item-wrap">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={item.url}
                        >
                          <img src={`${item.imageurl}`} className="item-img" />
                        </a>
                      </div>
                      <p>{item.description}</p>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
