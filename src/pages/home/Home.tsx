import React from "react";
import styles from "./Home.module.css";
import KKK from "../../assets/images/kkk.jpg";
import {Button, Stack} from "@mui/material";
import {Fade, Slide} from "react-awesome-reveal";
const resume = require("../../assets/resume.pdf");
const homevideo = require("../../assets/video/homevideo.mp4");
const homevideo2 = require("../../assets/video/bg2.mp4");

function Home() {
  const downloadResume = () => {
    const element = document.createElement("a");
    element.href = resume;
    element.download = "krishna_resume.pdf";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className={styles["home-page"]}>
      <video src={homevideo2} autoPlay loop muted />
      <div className={styles["main"]}>
        <div className={styles["home-contents-section"]}>
          <Stack direction={"column"} spacing={4}>
            <Stack>
              <span className={styles["home-first-text"]}>
                Hi, Im Krishna Kumar Kushwaha
              </span>
            </Stack>
            <Stack>
              <Slide>
                <span className={styles["home-second-text"]}>
                  Software Engineer
                </span>
              </Slide>
            </Stack>
            <Fade delay={800}>
              <Stack direction={"column"}>
                <span className={styles["home-third-text"]}>
                  A passionate Software Engineer 🚀 having an experience of
                  building Web and
                </span>
                <span className={styles["home-third-text"]}>
                  Mobile applications with JavaScript / Reactjs / Nodejs
                </span>
                <span className={styles["home-third-text"]}>
                  / React Native and some other cool libraries and frameworks.{" "}
                </span>
              </Stack>
            </Fade>
            <Button
              className="primary-btn"
              id="downloadBtn"
              value="download"
              onClick={downloadResume}
            >
              Download CV
            </Button>
          </Stack>
        </div>
        <div className={styles["contents-only-mobile"]}>
          <div>
            <span style={{fontSize: "40px"}}>Hi ,</span>
            {/* <span style={{fontSize: "20px"}}>I'm Krishna Kumar (KK) </span> */}
          </div>
          <div className={styles["line"]}>
            <h2 className={styles["flipY"]}>I'm Krishna Kumar (KK) </h2>
          </div>
          <div>
            <span style={{fontSize: "1rem", fontWeight: "bold"}}>
              A passionate Frontend Developer 🚀 having an experience of
              building Web and Mobile applications with JavaScript / Reactjs /
              Nodejs/ React Native and some other cool libraries and frameworks.
            </span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <Button
              className="secondary-btn"
              id="downloadBtn"
              value="download"
              onClick={downloadResume}
            >
              Download CV
            </Button>
          </div>
        </div>
        <div style={{padding: "30px"}}>
          <div className={styles["home-right-section"]}>
            <div className={styles["image-section"]}>
              <img src={KKK} alt="Profile" />
            </div>
          </div>
        </div>
      </div>    
    </div>
  );
}

export default Home;
