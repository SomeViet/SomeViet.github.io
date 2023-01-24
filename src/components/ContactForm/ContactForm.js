import "./ContactForm.scss";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../../assets/images/contact-img.svg";
import axios from "axios";

const SITE = process.env.REACT_APP_SERVER_URL;

export default function ContactForm() {
    const formInitialDetails = {
        firstName: "",
        lastName: "",
        email: "",
        message: "",
    };

    // Load initial state for contact form
    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState("Send");
    const [status, setStatus] = useState({});

    // Update state for form details - only update the category parameter passed
    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value,
        });
    };

    // Ping the back-end server on mount to wake onRender idle protocol
    useEffect(() => {
        axios
            .get(`${SITE}`)
            .then((response) => {
                console.log(response.data);
                return;
            })
            .catch((e) => {
                // console.log(e);
                return;
            });
    });

    // Form Submission - ASYNC
    const onButtonSubmit = async (e) => {
        e.preventDefault();

        // A check to see if all fields were inputted.
        if (
            e.target[0].value &&
            e.target[1].value &&
            e.target[2].value &&
            e.target[3].value
        ) {
            // Changing button text

            setButtonText("Sending....");

            // Execute on verification - send the form contents to the back-end
            let response = await fetch(`${SITE}/contact`, {
                method: "POST",
                headers: {
                    "Content-Type": "Application/json;charset=utf-8",
                },
                body: JSON.stringify(formDetails),
            });

            // After sent, Change button back

            setButtonText("Send");

            // Execute on verification - store response into result variable
            let result = await response.json();

            // Reset form to initial state
            setFormDetails(formInitialDetails);

            // Change the success/error message
            if (result.code === 200) {
                setStatus({
                    success: true,
                    message: "Message sent successfully",
                });
            } else {
                setStatus({
                    success: false,
                    message: "Something went Wrong. Please try again later.",
                });
            }
        } else {
            // Prompt the user to fill in all fields
            setStatus({
                success: false,
                message: "Please properly fill out all the fields",
            });
        }
    };

    return (
        <>
            <section className="contact-form" id="connect">
                <Container>
                    <div className="contact-form__box">
                        <Row>
                            <Col md={6}>
                                <img
                                    src={contactImg}
                                    alt="Contact Me"
                                    className="contact-form__hero"
                                />
                            </Col>
                            <Col md={6}>
                                <h2 className="contact-form__header">
                                    {" "}
                                    Get In Touch With Me
                                </h2>
                                <form onSubmit={onButtonSubmit}>
                                    <Row>
                                        <Col sm={6} className="px-1">
                                            <input
                                                type="text"
                                                className="contact-form__input"
                                                value={formDetails.firstName}
                                                placeholder="First Name"
                                                onChange={(e) =>
                                                    onFormUpdate(
                                                        "firstName",
                                                        e.target.value
                                                    )
                                                }
                                            />
                                        </Col>
                                        <Col sm={6} className="px-1">
                                            <input
                                                type="text"
                                                className="contact-form__input"
                                                value={formDetails.lastName}
                                                placeholder="Last Name"
                                                onChange={(e) =>
                                                    onFormUpdate(
                                                        "lastName",
                                                        e.target.value
                                                    )
                                                }
                                            />
                                        </Col>
                                        <Col
                                            sm={6}
                                            className="px-1 contact-form__email"
                                        >
                                            <input
                                                type="email"
                                                className="contact-form__input"
                                                value={formDetails.email}
                                                placeholder="Your Email"
                                                onChange={(e) =>
                                                    onFormUpdate(
                                                        "email",
                                                        e.target.value
                                                    )
                                                }
                                            />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm={12} className="px-1">
                                            <textarea
                                                row="6"
                                                className="contact-form__message"
                                                value={formDetails.message}
                                                placeholder="Message"
                                                onChange={(e) =>
                                                    onFormUpdate(
                                                        "message",
                                                        e.target.value
                                                    )
                                                }
                                            />
                                            <button
                                                type="submit"
                                                className="contact-form__button"
                                            >
                                                <span className="contact-form__button-text">
                                                    {buttonText}
                                                </span>
                                            </button>
                                            {status.message && (
                                                <Col>
                                                    <p
                                                        className={
                                                            status.success ===
                                                            false
                                                                ? "danger"
                                                                : "success"
                                                        }
                                                    >
                                                        {status.message}
                                                    </p>
                                                </Col>
                                            )}
                                        </Col>
                                    </Row>
                                </form>
                            </Col>
                        </Row>
                    </div>
                </Container>
                {/* background for the footer */}
            </section>
        </>
    );
}
