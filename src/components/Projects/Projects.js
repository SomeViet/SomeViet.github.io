import "./Projects.scss";
import { Row, Col, Container, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "../index";
import projectimage1 from "../../assets/images/project-img1.png";
import projectimage2 from "../../assets/images/project-img2.png";
import projectimage3 from "../../assets/images/project-img3.png";
import colorSharp2 from "../../assets/images/color-sharp2.png";

export default function Projects() {
    // List of projects
    const projects = [
        {
            title: "Project1",
            description: "This is project1",
            imgURL: projectimage1,
        },
        {
            title: "Project2",
            description: "This is project2",
            imgURL: projectimage2,
        },
        {
            title: "Project3",
            description: "This is project3",
            imgURL: projectimage3,
        },
        {
            title: "Project4",
            description: "This is project4",
            imgURL: projectimage1,
        },
        {
            title: "Project5",
            description: "This is project5",
            imgURL: projectimage2,
        },
    ];

    return (
        <>
            <section className="projects" id="projects">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="projects__header">Projects</h2>
                            <p className="projects__description">
                                "Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                            </p>
                            <Tab.Container
                                id="projects-tabs"
                                defaultActiveKey="first"
                            >
                                <Nav
                                    variant="pills"
                                    id="pills-tab"
                                    className="projects__nav-pills"
                                >
                                    <Nav.Item>
                                        <Nav.Link eventKey="first">
                                            Self-Taught
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second">
                                            BrainStation
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third">
                                            Others
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <Row>
                                            {projects.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />
                                                );
                                            })}
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <Row>
                                            {projects.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />
                                                );
                                            })}
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                        <Row>
                                            {projects.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />
                                                );
                                            })}
                                        </Row>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </Col>
                    </Row>
                </Container>
                <img
                    className="absolute-background-right"
                    src={colorSharp2}
                    alt="absolute-background-right"
                ></img>
            </section>
        </>
    );
}
