import React from "react";
import { Card } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
    .card-description {
        font-family: 'Times New Roman', serif;
        text-align: left;
        font-size: 18px;
    }
    
        .card-title {
        font-family: 'Times New Roman', serif;
        text-align: left;
        font-size: 25px;
    }
`;

const ProjectCard = (props) => {
    return (
        <Styles>
            <div>
                <Card>
                    <Card.Img variant="top" src={props.project.img}/>
                    <Card.Body>
                        <Card.Title className="card-title">{props.project.name}</Card.Title>
                        <Card.Text className="card-description">{props.project.description}</Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </Styles>
    );
};

export default ProjectCard;