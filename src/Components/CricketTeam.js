import React from "react";
import PersonCard from './PersonCard';
import { Col, Container, Row } from "react-bootstrap";
import CricketTeamData from '../data/CricketTeam.json'

const CricketTeam = () => {
 return(
    <>
    <h1 className="text-center">
        PSF Central Cricket Team
    </h1>

    <Container>
        <Row xl={4} lg={4} md={3} sm={2} xs={1} className="g-4 justify-content-center">
            {
                CricketTeamData.map((player, index) => (
                    <Col key={index}>
                        <PersonCard data={player} />
                    </Col>
                ))
            }
        </Row>
    </Container>
    </>    
 )
}

export default CricketTeam;