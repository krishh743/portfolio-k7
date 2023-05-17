import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import styles from "./Footer.module.css";
import AdjustIcon from "@mui/icons-material/Adjust";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

function Copyright() {
  return (
    <span>
      {"Copyright © "}
      {"2023"}
    </span>
  );
}

export default function StickyFooter() {
  return (
    <>
      <div className={styles["footer-mobile"]}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            minHeight: "auto",
          }}
        >
          <CssBaseline />

          <Box
            component="footer"
            sx={{
              py: 3,
              px: 2,
              backgroundColor: "#870046",
            }}
          >
            <Container maxWidth="sm">
              <Copyright />
              <AdjustIcon
                sx={{float: "right", color: "green", fontSize: "40px"}}
              />
            </Container>
          </Box>
        </Box>
      </div>
      <div className={styles["footer-desktop"]}>
        <Box
          component="footer"
          sx={{
            height: "100px",
            backgroundColor: "#870046",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 20px",
          }}
        >
          <span style={{color: "white"}}>
            © 2023 by Krishna | All Rights Reserved.
          </span>
          <ul
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              listStyleType: "none",
              margin: 0,
              padding: 0,
            }}
          >
            <li style={{marginLeft: "45px"}}>
              <a target="_blank" href="https://github.com/krishh743">
                <GitHubIcon sx={{color: "#000000", fontSize: "30px"}} />
              </a>
            </li>
            <li style={{marginLeft: "45px"}}>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/krishna-kushwaha-3b99b2187/"
              >
                <LinkedInIcon sx={{color: "white", fontSize: "30px"}} />
              </a>
            </li>
            <li style={{marginLeft: "45px"}}>
              <a
                target="_blank"
                href="https://instagram.com/krishna_k___7?igshid=OTk0YzhjMDVlZA=="
              >
                <InstagramIcon sx={{color: "pink", fontSize: "30px"}} />
              </a>
            </li>
            <li style={{marginLeft: "45px"}}>
              <a
                target="_blank"
                href="https://www.facebook.com/krishna.kushwaha.9421"
              >
                <FacebookIcon sx={{color: "lightblue", fontSize: "30px"}} />
              </a>
            </li>
          </ul>
        </Box>
      </div>
    </>
  );
}
