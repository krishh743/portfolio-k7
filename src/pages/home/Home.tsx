import React from "react";
import styles from "./Home.module.css";
import KKK from "../../assets/images/kkk.jpg";
import {Button, Stack} from "@mui/material";
import {Fade, Slide} from "react-awesome-reveal";
import {portfolioData} from "resources/cms";
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
                {portfolioData.Name}
              </span>
            </Stack>
            <Stack>
              <Slide>
                <span className={styles["home-second-text"]}>
                  {portfolioData.role}
                </span>
                
              </Slide>
            </Stack>
            <Fade delay={800}>
              <Stack direction={"column"}>
                <span className={styles["home-third-text"]}>
                  {portfolioData.objective1}
                </span>
                <span className={styles["home-third-text"]}>
                  {portfolioData.objective2}
                </span>
                <span className={styles["home-third-text"]}>
                  {portfolioData.objective3}
                </span>
              </Stack>
            </Fade>
            <Button
              className="primary-btn"
              id="downloadBtn"
              value="download"
              onClick={downloadResume}
            >
              {portfolioData.btnText}
            </Button>
          </Stack>
        </div>
        <div className={styles["contents-only-mobile"]}>
          <div>
            <span style={{fontSize: "40px"}}>{portfolioData.Hi}</span>
          </div>
          <div className={styles["line"]}>
            <h2 className={styles["flipY"]}>{portfolioData.nameForMobile}</h2>
          </div>
          <div>
            <span style={{fontSize: "1rem", fontWeight: "bold"}}>
              {portfolioData.objectiveMob}
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
              {portfolioData.btnText}
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
