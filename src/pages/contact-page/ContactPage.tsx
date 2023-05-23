import {Button, Stack, TextField} from "@mui/material";
import React, {useState} from "react";
import styles from "./ContactPage.module.css";
import emailjs from "emailjs-com";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RoomIcon from "@mui/icons-material/Room";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LanguageIcon from "@mui/icons-material/Language";
import {Fade} from "react-awesome-reveal";
import {
  capitaizeSentence,
  isValidEmailId,
  isValidMobileNumber,
  onlyNumbersAccept,
  phoneNumberFormat,
} from "utils/ValidationUtils";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import {portfolioData} from "resources/cms";
import {Link} from "react-router-dom";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  mobileNumber: string;
  message: string;
  errors: {
    firstName?: string;
    lastName?: string;
    email?: string;
    mobileNumber?: string;
    message?: string;
  };
}

const ContactPage = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    message: "",
    errors: {
      firstName: "",
      lastName: "",
      email: "",
      mobileNumber: "",
      message: "",
    },
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const errors: FormData["errors"] = {
      firstName: "",
      lastName: "",
      email: "",
      mobileNumber: "",
      message: "",
    };

    if (!formData.firstName.trim()) {
      errors.firstName = "First name is required !";
    }

    if (!formData.lastName.trim()) {
      errors.lastName = "Last name is required !";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required !";
    } else if (isValidEmailId(formData.email)) {
      errors.email = "Invalid email format !";
    }
    if (!formData.mobileNumber.trim()) {
      errors.mobileNumber = "Mobile number is required !";
    } else if (isValidMobileNumber(formData.mobileNumber)) {
      errors.mobileNumber = "mobile number must be 10 numbers !";
    }

    if (!formData.message.trim()) {
      errors.message = "Message is required !";
    }

    setFormData({...formData, errors});

    if (Object.values(errors).every((error) => !error)) {
      const submittedData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        mobileNumber: formData.mobileNumber,
        message: formData.message,
      };

      // email messaging services
      emailjs
        .send(
          "service_a31zemv", //service id
          "template_ywf8axd", //templates id
          submittedData,
          "wVten6qByzC-uShOr" //account id
        )
        .then(
          (response) => {
            // console.log("Email sent successfully!", response);
            toast.success("Email sent successfully!");
            resetForm();
          },
          (error) => {
            console.error("Error sending email:", error);
            toast.error("Error sending email");
          }
        );
    }
  };

  const resetForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      mobileNumber: "",
      message: "",
      errors: {
        firstName: "",
        lastName: "",
        email: "",
        mobileNumber: "",
        message: "",
      },
    });
  };
  const handleButtonClick = (event: any) => {
    handleSubmit(event);
  };

// const handleWebsit = () => {
// window.open("www.google.com")
// }

  return (
    <>
      <div className={styles["main-form-body"]}>
        <div className={styles["form-body"]}>
          <Stack flexDirection={"column"}>
            <Stack>
              <span className={styles["contact-text"]}>
                {portfolioData.CONTACT}
              </span>
            </Stack>
            <Stack>
              <span className={styles["contact-subtext"]}>
                {portfolioData.contactSubHeading}
              </span>
            </Stack>
            <form onSubmit={handleSubmit}>
              <div className={styles["form-fields"]}>
                <Stack
                  flexDirection={"row"}
                  spacing={{xs: 2, sm: 10}}
                  sx={{
                    "@media (min-width:768px)": {
                      spacing: 10,
                    },
                  }}
                >
                  <TextField
                    id="firstName"
                    label="First Name"
                    variant="standard"
                    name="firstName"
                    value={capitaizeSentence(formData.firstName)}
                    onChange={(event) =>
                      setFormData({
                        ...formData,
                        firstName: event.target.value,
                        errors: {...formData.errors, firstName: undefined},
                      })
                    }
                    error={Boolean(formData.errors.firstName)}
                    helperText={formData.errors.firstName}
                  />
                  <TextField
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    variant="standard"
                    value={capitaizeSentence(formData.lastName)}
                    onChange={(event) =>
                      setFormData({
                        ...formData,
                        lastName: event.target.value,
                        errors: {...formData.errors, lastName: undefined},
                      })
                    }
                    error={Boolean(formData.errors.lastName)}
                    helperText={formData.errors.lastName}
                  />
                </Stack>

                <TextField
                  id="email"
                  label="Email"
                  name="email"
                  variant="standard"
                  value={formData.email}
                  onChange={(event) =>
                    setFormData({
                      ...formData,
                      email: event.target.value,
                      errors: {...formData.errors, email: undefined},
                    })
                  }
                  error={Boolean(formData.errors.email)}
                  helperText={formData.errors.email}
                />
                <TextField
                  id="mobileNumber"
                  label="Mobile Number"
                  name="mobileNumber"
                  variant="standard"
                  // type="Number"
                  value={onlyNumbersAccept(formData.mobileNumber)}
                  onChange={(event) =>
                    setFormData({
                      ...formData,
                      mobileNumber: event.target.value,
                      errors: {...formData.errors, mobileNumber: undefined},
                    })
                  }
                  error={Boolean(formData.errors.mobileNumber)}
                  helperText={formData.errors.mobileNumber}
                />
                <TextField
                  id="message"
                  label="Message"
                  name="message"
                  multiline
                  rows={4}
                  value={capitaizeSentence(formData.message)}
                  onChange={(event) =>
                    setFormData({
                      ...formData,
                      message: event.target.value,
                      errors: {...formData.errors, message: undefined},
                    })
                  }
                  error={Boolean(formData.errors.message)}
                  helperText={formData.errors.message}
                />
                <Stack justifyContent={"center"} sx={{marginTop: "20px"}}>
                  <Button
                    className={styles["btn-submit"]}
                    onClick={handleButtonClick}
                  >
                    {portfolioData.sendBtn}
                  </Button>
                  <ToastContainer />
                </Stack>
              </div>
            </form>
          </Stack>
        </div>
        <div className={styles["my-loaction"]}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1798.1859358498932!2d83.67599009999999!3d25.6589647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399203baea01afad%3A0x8351afe10cae0e2f!2sHanuman%20Temple!5e0!3m2!1sen!2sin!4v1684340642649!5m2!1sen!2sin"
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <div className={styles["address-section"]}>
        <div className={styles["about-heading-1"]}>{portfolioData.address}</div>
        <Stack
          flexDirection={"row"}
          sx={{
            "@media (max-width:768px)": {
              flexDirection: "column",
              flexWrap: "wrap",
              rowGap: "15px",
              // width: "50%",
              padding: "15px",
            },
          }}
        >
          <Fade cascade damping={0.9}>
            <Stack flexDirection={"column"}>
              <RoomIcon sx={{color: "#FF0000", fontSize: "35px"}} />
              <Stack flexDirection={"row"} whiteSpace={"nowrap"}>
                <span className={styles["address-key"]}>
                  {portfolioData.address1}
                </span>
                <span className={styles["address-value"]}>
                  {portfolioData.addressData}
                </span>
              </Stack>
            </Stack>
            <Stack>
              <Stack flexDirection={"column"}>
                <PhoneIcon sx={{color: "", fontSize: "35px"}} />
                <Stack flexDirection={"row"}>
                  <span className={styles["address-key"]}>
                    {portfolioData.phone}
                  </span>
                  <span className={styles["address-value"]}>
                    {portfolioData.phoneData}
                  </span>
                </Stack>
              </Stack>
            </Stack>
            <Stack>
              <Stack flexDirection={"column"}>
                <EmailIcon sx={{color: "", fontSize: "35px"}} />
                <Stack flexDirection={"row"}>
                  <span className={styles["address-key"]}>
                    {portfolioData.email}
                  </span>
                  <span className={styles["address-value"]}>
                    {portfolioData.emailData}
                  </span>
                </Stack>
              </Stack>
            </Stack>
            <Stack>
              <Stack flexDirection={"column"}>
                <LanguageIcon sx={{color: "", fontSize: "35px"}} />
                <Stack flexDirection={"row"}>
                  <span className={styles["address-key"]}>
                    {portfolioData.website}
                  </span>
                  <span className={styles["address-value"]}>
                    <a
                      href="https://myhospital-app.netlify.app"
                      target="_blank"
                      style={{
                        cursor: "pointer",
                        color: "blue",
                        margin: "0px",
                        padding: "0px",
                        fontSize:"1rem"
                      }}
                    >
                      {portfolioData.websiteLink}
                    </a>
                  </span>
                </Stack>
              </Stack>
            </Stack>
          </Fade>
        </Stack>
      </div>
      <div className={styles["social-media-mobile"]}>
        <ul
          style={{
            display: "flex",
            // flexDirection: "row",
            justifyContent: "space-evenly",
            listStyleType: "none",
            margin: 0,
            padding: "15px",
          }}
        >
          <li>
            <a target="_blank" href="https://github.com/krishh743">
              <GitHubIcon sx={{color: "#000000", fontSize: "30px"}} />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/krishna-kushwaha-3b99b2187/"
            >
              <LinkedInIcon sx={{color: "white", fontSize: "30px"}} />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://instagram.com/krishna_k___7?igshid=OTk0YzhjMDVlZA=="
            >
              <InstagramIcon sx={{color: "pink", fontSize: "30px"}} />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.facebook.com/krishna.kushwaha.9421"
            >
              <FacebookIcon sx={{color: "lightblue", fontSize: "30px"}} />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ContactPage;
