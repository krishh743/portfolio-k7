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

function ContactPage(): JSX.Element {
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
      errors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      errors.lastName = "Last name is required";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Invalid email format";
    }

    if (!formData.mobileNumber.trim()) {
      errors.mobileNumber = "Mobile number is required";
    } else if (!/^[0-9]{10}$/.test(formData.mobileNumber)) {
      errors.mobileNumber = "Invalid mobile number";
    }

    if (!formData.message.trim()) {
      errors.message = "Message is required";
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

      emailjs
        .send(
          "service_a31zemv",
          "template_ywf8axd",
          submittedData,
          "wVten6qByzC-uShOr"
        )
        .then(
          (response) => {
            console.log("Email sent successfully!", response);
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

  return (
    <>
      <div className={styles["main-form-body"]}>
        <div className={styles["form-body"]}>
          <Stack flexDirection={"column"}>
            <Stack>
              <span className={styles["contact-text"]}>Contact</span>
            </Stack>
            <Stack>
              <span style={{fontSize: "1.4rem"}}>Feel Free To Contact Us.</span>
            </Stack>
            <form onSubmit={handleSubmit}>
              <div style={{width: "80vh"}} className={styles["form-fields"]}>
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
                    value={formData.firstName}
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
                    value={formData.lastName}
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
                  value={formData.mobileNumber}
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
                  value={formData.message}
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
                    Send Message
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
        <div className={styles["about-heading-1"]}>Address</div>
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
                <span className={styles["address-key"]}>Address:</span>
                <span className={styles["address-value"]}>
                  Ghazipur, Nonhara,233303 U.P
                </span>
              </Stack>
            </Stack>
            <Stack>
              <Stack flexDirection={"column"}>
                <PhoneIcon sx={{color: "blue", fontSize: "35px"}} />
                <Stack flexDirection={"row"}>
                  <span className={styles["address-key"]}>Phone:</span>
                  <span className={styles["address-value"]}>
                    +91 9118575852
                  </span>
                </Stack>
              </Stack>
            </Stack>
            <Stack>
              <Stack flexDirection={"column"}>
                <EmailIcon sx={{color: "blue", fontSize: "35px"}} />
                <Stack flexDirection={"row"}>
                  <span className={styles["address-key"]}>Email:</span>
                  <span className={styles["address-value"]}>
                    krishnakushwaha743@gmail.com
                  </span>
                </Stack>{" "}
              </Stack>
            </Stack>
            <Stack>
              <Stack flexDirection={"column"}>
                <LanguageIcon sx={{color: "blue", fontSize: "35px"}} />
                <Stack flexDirection={"row"}>
                  <span className={styles["address-key"]}>Website:</span>
                  <span className={styles["address-value"]}>
                    www.example.com
                  </span>
                </Stack>
              </Stack>
            </Stack>
          </Fade>
        </Stack>
      </div>
    </>
  );
}

export default ContactPage;
