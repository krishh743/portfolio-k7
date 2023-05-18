import React from "react";
import {Stack} from "@mui/material";
import "./About.css";
import {
  aboutDetailsRows,
  aboutDetailsRows1,
  aboutDetailsRowsReverse,
} from "pages/Data";
import {useEffect, useRef} from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {
  Fade,
  Flip,
  JackInTheBox,
  Rotate,
  Slide,
  Zoom,
} from "react-awesome-reveal";

function About() {

  return (
    <>
      <div
        style={{
          height: "auto",
          backgroundColor: "#433c61",
          padding: "20px",
          transform: "translateZ(0)",
        }}
      >
        <div
          style={{
            textAlign: "center",
          }}
        >
          <Rotate>
            <h2>About</h2>
          </Rotate>
        </div>
        {aboutDetailsRows1.map((item, index) => (
          <>
            <div className="about-heading">1. Professional Experience</div>
            <div className="image-section" key={index}>
              <div className="row-image">
                <Slide>
                  <img alt="" src={item.image} />
                </Slide>
              </div>
              <div className="content-section">
                <div className="image-two">
                  <Slide direction="right">
                    <img src={item.image2} alt="" />
                  </Slide>
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
                <div className="about-heading-1">2. Graduation (2017-2021)</div>
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
                {/* <Zoom> */}
                  <img alt="" src={item.image} />
                {/* </Zoom> */}
              </div>
              <div className="content-container">
                <div className="about-heading-1">
                  2. Intermediate (2012-2017)
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
}

export default About;
