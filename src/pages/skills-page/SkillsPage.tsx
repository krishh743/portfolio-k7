import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import {CardActionArea} from "@mui/material";
import {skillsData} from "pages/Data";
import styles from "./SkillsPage.module.css";
import CarouselPage from "components/carousel/CarouselPage";
import Carousel from "components/carouselComponent/carousel";
import {carouselData} from "./CarouselData";
import {Slide} from "react-awesome-reveal";
import {portfolioData} from "resources/cms";

const SkillsPage = () => {
// function SkillsPage() {
  return (
    <>
      <div
        style={{
          textAlign: "center",
          backgroundColor: "#433c61",
          fontSize: "2rem",
          color: "white",
        }}
      >
        {portfolioData.mySkills}
      </div>
      <div className={styles["card-container"]}>
        {skillsData.map((item, index) => (
          <div className={styles["card-wrapper"]} key={index}>
            <Slide direction="left" delay={200}>
              <Card className={styles["card-style"]}>
                <CardActionArea>
                  <div className={styles["card-body"]}>
                    <div className={styles["skills-images"]}>
                      <img src={item.image} alt="green iguana" />
                    </div>
                  </div>
                  <CardContent></CardContent>
                </CardActionArea>
                <div style={{textAlign: "center"}}>
                  <span className={styles["text-section"]}>
                    {item.skillName}
                  </span>
                </div>
              </Card>
            </Slide>
          </div>
        ))}
      </div>
      <div className={styles.giftCarousel}>
        <h2>{portfolioData.certificate}</h2>
        <Carousel singleCarousel={false} carouselData={carouselData} />
      </div>
    </>
  );
}

export default SkillsPage;
