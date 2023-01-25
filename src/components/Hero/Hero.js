import "./Hero.scss";
import { Row, Col, Container } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import heroImage from "../../assets/images/header-img.svg";
import { useState, useEffect } from "react";

export default function Hero() {
    const [loopIndex, setLoopIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [displayText, setDisplayText] = useState("");
    const deletingDelay = 2000;
    const [typingDelay, setTypingDelay] = useState(200 - Math.random() * 15);
    const toRotate = [
        "a Front-end Developer",
        "a Full-stack Developer",
        "a Front-end Developer",
        "a Full-stack Developer",
        "a Front-end Developer",
        "a Full-stack Developer",
        "your next hire!",
    ];
    // eslint-disable-next-line no-unused-vars
    // const [errorLooper, setErrorLooper] = useState(0);

    useEffect(() => {
        // Set an interval for the typing animation
        let ticker = setInterval(() => {
            tick();
        }, typingDelay);

        return () => {
            clearInterval(ticker);
        };
        // disable the dependency error, as the only dependency we are about is displayText
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [displayText]);

    // Typing animation function
    const tick = () => {
        // "i" will loop back to 0, after going through the array.
        let i = loopIndex % toRotate.length;
        let fullText = toRotate[i];

        // if true, delete the last letter in the variable, otherwise, add the next letter
        let updatedText = isDeleting
            ? fullText.substring(0, displayText.length - 1)
            : fullText.substring(0, displayText.length + 1);

        setDisplayText(updatedText);

        // If deleting characters, speed up the deletion of characters.
        if (isDeleting) {
            setTypingDelay((prevDelay) => prevDelay / 1.7);
        }

        // Once fully typed out, start deleting
        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setTypingDelay(deletingDelay);

            // Once deleting is done, start typing the next word in the array
        } else if (isDeleting && updatedText === "") {
            setIsDeleting(false);
            setLoopIndex(loopIndex + 1);
            setTypingDelay(300);
        } else {
            return;
            // remove the ES lint rule disabler
            // setErrorLooper((prevErrorLoop) => prevErrorLoop + 1);
            // console.log(errorLooper);
        }
    };

    return (
        <>
            <main className="hero" id="home">
                <Container>
                    <Row className="align-items-center">
                        <Col xs={12} md={6} xl={7}>
                            <span className="hero__tagline">
                                Welcome to my portfolio
                            </span>
                            <h1 className="hero__header">
                                {`Hi I'm Kevin, `}
                                <span className="hero__wrap">
                                    {displayText}
                                </span>
                            </h1>
                            <p className="hero__about-me">
                                As a junior software developer, I am constantly
                                striving to improve my skills and knowledge of
                                new technologies. On this website, you will find
                                a selection of my projects and accomplishments
                                so far, as well as my current skills and areas
                                of interest. I am currently open to new job
                                offers and collaborations. Please take a look
                                around and don't hesitate to contact me if you
                                have any questions or would like to discuss a
                                potential project or job opportunity.
                            </p>

                            <a href="#connect" className="hero__connect">
                                <button className="hero__connect-button">
                                    Let's Connect <ArrowRightCircle size={25} />
                                </button>
                            </a>
                        </Col>
                        <Col xs={12} md={6} xl={5} className="hero__right">
                            <img
                                src={heroImage}
                                alt="Hero"
                                className="hero__image"
                            />
                        </Col>
                    </Row>
                </Container>
            </main>
        </>
    );
}
