import React from "react";
import "./App.css";

import resumeData from "./components/resumeData";
import Header from "./components/header";
import About from "./components/about";
import Footer from "./components/footer";
import Portfolio from "./components/portfolio";
import Resume from "./components/resume";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header resumeData={resumeData} />
        <Resume resumeData={resumeData} />
        <Portfolio resumeData={resumeData} />
        <About resumeData={resumeData} />
        <Footer resumeData={resumeData} />
      </div>
    );
  }
}

export default App;
