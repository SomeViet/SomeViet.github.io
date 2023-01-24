import "./Projects.scss";
import { Row, Col, Container, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "../index";
import projectcalculator from "../../assets/images/project-calculator.png";
import projecttasklist from "../../assets/images/project-task-list.png";
import projectbrainflix from "../../assets/images/project-brainflix.png";
import projecthungry from "../../assets/images/project-hungry.png";
import projectportfolio from "../../assets/images/project-portfolio.png";
import projectbandsite from "../../assets/images/project-bandsite.png";
import colorSharp2 from "../../assets/images/color-sharp2.png";

export default function Projects() {
    // List of projects
    const projects = [
        {
            title: "This Portfolio Site!",
            description: "A site showcasing all my projects and skills",
            imgURL: projectportfolio,
            link: "https://someviet.github.io/",
        },
        {
            title: "A Calculator",
            description: "A Simple React Calculator",
            imgURL: projectcalculator,
            link: "https://sv-portfolio-calculator.onrender.com/",
        },
        {
            title: "A Task List",
            description: "A basic task list using locally hosted memory",
            imgURL: projecttasklist,
            link: "https://sv-portfolio-task-list.onrender.com/",
        },
    ];

    const brainstation_projects = [
        {
            title: "Brainflix",
            description:
                "A YouTube/Netflix Clone built to demonstrate state/dynamic routing and accessing a back-end",
            imgURL: projectbrainflix,
            link: "https://sv-portfolio-task-list.onrender.com/",
        },
        {
            title: "BandSite",
            description:
                "A Bandsite Biography mock-up to apply the SASS and Flexbox knowledge we learned. Minimal Javascript",
            imgURL: projectbandsite,
            link: "https://sv-brainstation-bandsite.onrender.com",
        },
    ];

    const other_projects = [
        {
            title: "I AM HUNGRY",
            description:
                "A mock interface improvement over UberEats or Skip the Dishes - currently disabled due to Google Maps Free trial expiring",
            imgURL: projecthungry,
            link: "https://sv-portfolio-hungry.onrender.com/",
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
                                A showcase of my personal projects that
                                demonstrate the skills and technologies I have
                                learned. Projects range from basic web
                                development, programming languages, and more.
                                These projects not only reflect my technical
                                expertise but also my drive to continuously
                                learn and improve in the constantly evolving
                                field of software development
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
                                            On-Going
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
                                            {brainstation_projects.map(
                                                (project, index) => {
                                                    return (
                                                        <ProjectCard
                                                            key={index}
                                                            {...project}
                                                        />
                                                    );
                                                }
                                            )}
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                        <Row>
                                            {other_projects.map(
                                                (project, index) => {
                                                    return (
                                                        <ProjectCard
                                                            key={index}
                                                            {...project}
                                                        />
                                                    );
                                                }
                                            )}
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
