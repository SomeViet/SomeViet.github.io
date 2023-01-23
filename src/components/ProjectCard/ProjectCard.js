import "./ProjectCard.scss";
import { Col } from "react-bootstrap";

export default function ProjectCard({ title, description, imgURL }) {
    return (
        <>
            <Col sm={6} md={4}>
                <div className="project-card">
                    <img
                        src={imgURL}
                        className="project-card__image"
                        alt="project"
                    />
                    <div className="project-card__container">
                        <h4 className="project-card__header">{title}</h4>
                        <span className="project-card__description">
                            {description}
                        </span>
                    </div>
                </div>
            </Col>
        </>
    );
}
