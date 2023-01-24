import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import portfolioLogo from "../../assets/images/logo.svg";
import navIcon1 from "../../assets/images/nav-icon1.svg";
import navIcon2 from "../../assets/images/nav-icon2.svg";
import "./NavBar.scss";

export default function NavBar() {
    const [active, setActive] = useState("home");
    const [scrolled, setScrolled] = useState(false);

    // on Mount, set Navbar scrolling change
    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const onUpdateActive = (value) => {
        setActive(value);
    };

    return (
        <Navbar
            expand="md"
            className={scrolled ? "navbar navbar--scrolled" : "navbar"}
        >
            <Container>
                <Navbar.Brand href="/" className="navbar__brand">
                    <img src={portfolioLogo} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link
                            href="#home"
                            className={
                                active === "home"
                                    ? "navbar__link--active"
                                    : "navbar__link"
                            }
                            onClick={() => onUpdateActive("home")}
                        >
                            Home
                        </Nav.Link>
                        <Nav.Link
                            href="#skills"
                            className={
                                active === "skills"
                                    ? "navbar__link--active"
                                    : "navbar__link"
                            }
                            onClick={() => onUpdateActive("skills")}
                        >
                            Skills
                        </Nav.Link>
                        <Nav.Link
                            href="#projects"
                            className={
                                active === "projects"
                                    ? "navbar__link--active"
                                    : "navbar__link"
                            }
                            onClick={() => onUpdateActive("projects")}
                        >
                            Projects
                        </Nav.Link>
                    </Nav>
                    <span className="navbar-social">
                        <div className="navbar-social__container">
                            <a
                                href="https://www.linkedin.com/in/kevin-anh-tran/"
                                className="navbar-social__link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src={navIcon1}
                                    alt="linkedin"
                                    className="navbar-social__link-image"
                                />
                            </a>
                            <a
                                href="https://github.com/SomeViet"
                                className="navbar-social__link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src={navIcon2}
                                    alt="github"
                                    className="navbar-social__link-image"
                                />
                            </a>
                        </div>

                        <a href="#connect" className="navbar-social__connect">
                            <button className="navbar-social__connect-button">
                                <span className="navbar-social__connect-button-text">
                                    Let’s Connect
                                </span>
                            </button>
                        </a>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
