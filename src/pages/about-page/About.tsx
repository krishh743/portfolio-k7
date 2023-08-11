import React from "react";
import "./About.css";
import {
  aboutDetailsRows,
  aboutDetailsRows1,
  aboutDetailsRowsReverse,
} from "pages/Data";
import {Fade, Rotate, Slide} from "react-awesome-reveal";
import {portfolioData} from "resources/cms";
   
const About = () => {
  return (
    <>
      <div className="about-page">
        <div className="about-main-heading">
          <Rotate>
            <h2>{portfolioData.ABOUT}</h2>
          </Rotate>
        </div>
        {aboutDetailsRows1.map((item, index) => (
          <>
            <div className="about-heading">{portfolioData.experience1}</div>
            <div className="image-section" key={index}>
              <div className="row-image">
                {/* <Slide> */}
                  <img alt="" src={item.image} />
                {/* </Slide> */}
              </div>
              <div className="content-section">
                <div className="image-two">
                  <Fade>
                    <img src={item.image2} alt="" />
                  </Fade>
                </div>
                <Slide direction="down">
                  <span className="detailss">{item.details}</span>
                </Slide>
              </div>
            </div>
          </>
        ))}
        {aboutDetailsRows.map((item, index) => (
          <>
            <div className="container">
              <div className="image-container">
                <Slide>
                  <img alt="" src={item.image} />
                </Slide>
              </div>
              <div className="content-container">
                <div className="about-heading-1">
                  {portfolioData.experience2}
                </div>
                <Slide direction="right">
                  <span className="detailss">{item.details}</span>
                </Slide>
              </div>
            </div>
          </>
        ))}

        {aboutDetailsRowsReverse.map((item, index) => (
          <>
            <div className="container-reverse">
              <div className="image-container-reverse">
                <img alt="" src={item.image} />
              </div>
              <div className="content-container">
                <div className="about-heading-1">
                  {portfolioData.experience3}
                </div>
                <Slide direction="left">
                  <span className="detailss">{item.details}</span>
                </Slide>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default About;
