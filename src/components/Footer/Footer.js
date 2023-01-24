import "./Footer.scss";
import { Row, Col, Container } from "react-bootstrap";
import portfolioLogo from "../../assets/images/logo.svg";
import footerIcon1 from "../../assets/images/nav-icon1.svg";
import footerIcon2 from "../../assets/images/nav-icon2.svg";

export default function Footer() {
    return (
        <>
            <footer className="footer">
                <Container>
                    <Row className="footer__row">
                        <Col size={12} sm={6}>
                            <a href="/">
                                <img
                                    src={portfolioLogo}
                                    alt="Logo"
                                    className="footer__logo"
                                />
                            </a>
                        </Col>
                        <Col
                            size={12}
                            sm={6}
                            className="text-center text-sm-end"
                        >
                            <div className="footer__social">
                                <a
                                    href="https://www.linkedin.com/in/kevin-anh-tran/"
                                    className="footer__link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src={footerIcon1}
                                        alt="linkedin"
                                        className="footer__link-image"
                                    />
                                </a>
                                <a
                                    href="https://github.com/SomeViet"
                                    className="footer__link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src={footerIcon2}
                                        alt="github"
                                        className="footer__link-image"
                                    />
                                </a>
                            </div>
                        </Col>
                    </Row>
                    <p className="footer__copyright">
                        Copyright 2023. All Rights Reserved.
                    </p>
                </Container>
            </footer>
        </>
    );
}
