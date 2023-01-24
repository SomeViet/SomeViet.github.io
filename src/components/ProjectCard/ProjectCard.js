import "./ProjectCard.scss";
import { Col } from "react-bootstrap";

export default function ProjectCard({ title, description, imgURL, link }) {
    return (
        <>
            <Col sm={6} md={4}>
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card"
                >
                    <div className="project-card__container">
                        <img
                            src={imgURL}
                            className="project-card__image"
                            alt="project"
                        />
                        <div className="project-card__overlay">
                            <h4 className="project-card__header">{title}</h4>
                            <span className="project-card__description">
                                {description}
                            </span>
                        </div>
                    </div>
                </a>
            </Col>
        </>
    );
}
