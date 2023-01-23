import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../../assets/images/contact-img.svg";

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

    const onButtonSubmit = () => {};

    return (
        <>
            <section className="contact-form" id="connect">
                <Container>
                    <Row className="contact-form__row">
                        <Col md={6}>
                            <img src={contactImg} alt="Contact Me" />
                        </Col>
                        <Col md={6}>
                            <h2> Get In Touch With Me</h2>
                            <form onSubmit={onButtonSubmit}>
                                <Row>
                                    <Col sm={6} className="px-1">
                                        <input
                                            type="text"
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
                                    <Col sm={6} className="px-1">
                                        <input
                                            type="email"
                                            value={formDetails.email}
                                            placeholder="Email"
                                            onChange={(e) =>
                                                onFormUpdate(
                                                    "email",
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </Col>
                                    <Row>
                                        <Col sm={6} className="px-1">
                                            <textarea
                                                row="6"
                                                value={formDetails.message}
                                                placeholder="Message"
                                                onChange={(e) =>
                                                    onFormUpdate(
                                                        "message",
                                                        e.target.value
                                                    )
                                                }
                                            />
                                            <button type="submit">
                                                <span>{buttonText}</span>
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
                                </Row>
                            </form>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}
