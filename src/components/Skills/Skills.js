import "./Skills.scss";
import Carousel from "react-multi-carousel";
import { Row, Col, Container } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import javascriptimage from "../../assets/images/javascript.svg";
import reactimage from "../../assets/images/react.svg";
import nodejsimage from "../../assets/images/nodejs.svg";
import expressimage from "../../assets/images/express.svg";
import kneximage from "../../assets/images/knex.svg";
import colorSharp from "../../assets/images/color-sharp.png";

export default function Skills() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 4,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    return (
        <>
            <section className="skills" id="skills">
                <Container>
                    <Row>
                        <Col>
                            <div className="skills__box">
                                <h2 className="skills__header">Skills</h2>
                                <p className="skills__description">
                                    "Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat. Duis aute irure
                                    dolor in reprehenderit in voluptate velit
                                    esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non
                                    proident, sunt in culpa qui officia deserunt
                                    mollit anim id est laborum."
                                </p>
                                <Carousel
                                    responsive={responsive}
                                    infinite={true}
                                    className="skills__carousel"
                                >
                                    <div className="skills__item">
                                        <img
                                            src={javascriptimage}
                                            alt="Skills"
                                            className="skills__item-image"
                                        />
                                        <h5 className="skills__item-text">
                                            Javascript
                                        </h5>
                                    </div>
                                    <div className="skills__item">
                                        <img
                                            src={reactimage}
                                            alt="Skills"
                                            className="skills__item-image"
                                        />
                                        <h5 className="skills__item-text">
                                            React
                                        </h5>
                                    </div>
                                    <div className="skills__item">
                                        <img
                                            src={nodejsimage}
                                            alt="Skills"
                                            className="skills__item-image"
                                        />
                                        <h5 className="skills__item-text">
                                            Node JS
                                        </h5>
                                    </div>
                                    <div className="skills__item">
                                        <img
                                            src={kneximage}
                                            alt="Skills"
                                            className="skills__item-image"
                                        />
                                        <h5 className="skills__item-text">
                                            Knex.js
                                        </h5>
                                    </div>
                                    <div className="skills__item">
                                        <img
                                            src={expressimage}
                                            alt="Skills"
                                            className="skills__item-image"
                                        />
                                        <h5 className="skills__item-text">
                                            Express
                                        </h5>
                                    </div>
                                </Carousel>
                            </div>
                        </Col>
                    </Row>
                </Container>
                {/* Background image for after the hero component */}
                <img
                    className="absolute-background-left"
                    src={colorSharp}
                    alt="colorsharp"
                />
            </section>
        </>
    );
}
