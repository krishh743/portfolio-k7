import FormFieldContainer from "components/form-field-container/FormFieldContainer";
import {Button, Stack} from "@mui/material";
import styles from "./ProjectPage.module.css";
import {personalProject, professionalProject} from "pages/Data";
import {experimentalStyled as styled} from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import {Slide, Zoom} from "react-awesome-reveal";
import {portfolioData} from "resources/cms";

const Item = styled(Paper)(({theme}) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "white",
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: "center",
  color: "black",
  position: "relative",
  overflow: "hidden",
}));

const ImageOverlay = styled("div")({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "rgba(24, 14, 48, 0.4)",
  opacity: 0,
  transition: "opacity 0.6s ease",
  "&:hover": {
    opacity: 1,
    transform: "scale(1.2)", // Add a scale transformation for zoom effect
  },
});

const OverlayText = styled("span")({
  color: "#1D3557",
  fontSize: "2.4rem",
  fontWeight: "bold",
});

const ProjectPage = () => {
  const handleViewButtonClick = (project: any) => {
    if (project.type === "professional") {
      // console.log("Response from Professional Project", project.id);
    } else if (project.type === "personal") {
      // console.log("Response from Personal Project", project.id);
      if (project.id === 2) {
        window.open(
          "https://www.indusind.com/in/en/personal/loans/vehicle-loan.html"
        );
      }
      if (project.id === 3) {
        window.open(
          "https://www.jaypore.com/?gclid=CjwKCAjwpayjBhAnEiwA-7ena_FuyEZ9ue3JEvuRdWJjMi8SmTaNlXqebJm4I85VXnaJju4nbqPG1BoC2CwQAvD_BwE"
        );
      }
    }
  };

  const handleSourceButtonClick = (project: any) => {
    if (project.type === "professional") {
      if (project.id === 1) {
        window.open("https://github.com/krishh743/WIKIPEDIA-APP");
      }
      if (project.id === 2) {
        window.open("https://github.com/krishh743/CRUD_PROJECT");
      }
      if (project.id === 3) {
        window.open("https://github.com/krishh743/portfolio-k7");
      }
    }
  };

  const handlePersonalProjectView = (pproject: any) => {
    if (pproject.type === "professional") {
      if (pproject.id === 1) {
        window.open("https://krishh743.github.io/WIKIPEDIA-APP/");
      }
      if (pproject.id === 2) {
      }
      if (pproject.id === 3) {
        window.open("https://krishnakushwahak.netlify.app/");
      }
    }
  };
  return (
    <div className={styles["project-body"]}>
      <FormFieldContainer children={"Professional Projects"} />
      <Box
        sx={{
          paddingInline: "5rem",
          "@media (max-width:768px)": {
            paddingInline: "1rem",
          },
        }}
      >
        <Grid container spacing={2}>
          {professionalProject.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Item>
                <div className={styles["image-section"]}>
                  <img src={item.image} alt="project" />

                  <ImageOverlay>
                    <OverlayText>{item.hoverText}</OverlayText>
                  </ImageOverlay>
                </div>
                <div>
                  <span className={styles["project-heading"]}>
                    {item.heading}
                  </span>
                  <br />
                  <Slide direction="left">
                    <span className={styles["project-details"]}>
                      {item.description}
                    </span>
                  </Slide>
                  <Stack
                    justifyContent="center"
                    spacing={4}
                    marginTop="15px"
                    marginBottom="15px"
                    sx={{
                      // margin:"0",
                      "@media (max-width:768px)": {
                        paddingInline: "15px",
                      },
                    }}
                  >
                    <Button
                      className="secondary-btn"
                      onClick={() =>
                        handleViewButtonClick({type: "personal", id: item.id})
                      }
                    >
                      {portfolioData.viewBtn}
                    </Button>
                    <Button
                      className="secondary-btn"
                      disabled
                      onClick={() => handleSourceButtonClick(item)}
                    >
                      {portfolioData.sourceBtn}
                    </Button>
                  </Stack>
                </div>
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
      <FormFieldContainer children={"Personal Projects"} />

      <Box
        sx={{
          paddingInline: "5rem",
          paddingBottom: "20px",
          "@media (max-width:768px)": {
            paddingInline: "1rem",
          },
        }}
      >
        <Grid container spacing={2}>
          {personalProject.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Item>
                <div className={styles["image-section"]}>
                  <img src={item.image} alt="project" />
                  <ImageOverlay>
                    <OverlayText>{item.hoverText}</OverlayText>
                  </ImageOverlay>
                </div>
                <div className={styles["button-project"]}>
                  <span className={styles["project-heading"]}>
                    {item.heading}
                  </span>
                  <br />
                  <Slide direction="left">
                    <span className={styles["project-details"]}>
                      {item.description}
                    </span>
                  </Slide>
                  <Stack
                    justifyContent="center"
                    spacing={4}
                    marginTop="15px"
                    marginBottom="15px"
                    sx={{
                      "@media (max-width:768px)": {
                        paddingInline: "15px",
                      },
                    }}
                  >
                    <Button
                      className="secondary-btn"
                      onClick={() =>
                        handlePersonalProjectView({
                          type: "professional",
                          id: item.id,
                        })
                      }
                    >
                      {portfolioData.viewBtn}
                    </Button>
                    <Button
                      className="secondary-btn"
                      onClick={() =>
                        handleSourceButtonClick({
                          type: "professional",
                          id: item.id,
                        })
                      }
                    >
                      {portfolioData.sourceBtn}
                    </Button>
                  </Stack>
                </div>
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};
export default ProjectPage;
