import React from "react";
import { Card } from "react-bootstrap";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import "../../src/css/ProductCard.css";

const PersonCard = ( { data }) => {
  const {
    imgName = "default.jpeg",
    Name,
    designation,
    description,
    linkedinProfile,
    instagramProfile,
  } = data;

  return (
    <Card className="mt-4" style={{ height: '100%'}}>
      <div className="expand-on-hover p-2">
        <Card.Img
          style={{ objectFit: "cover" }}
          variant="top"
          src={`profileImages/${imgName}`}
          alt="Person"
        />
      </div>
      <Card.Body className="mt-3 p-1 text-center">
        <Card.Title> {Name} </Card.Title>
        <Card.Text
          className="mt-4"
          style={{ fontSize: "0.8rem", fontWeight: "normal" }}
        >
          {description}
        </Card.Text>
        <Card.Subtitle style={{ fontSize: "1rem" }} className="mt-3">
          {" "}
          {designation}{" "}
        </Card.Subtitle>
        <div className="d-flex justify-content-center">
          {linkedinProfile && (
            <a href={linkedinProfile} target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={20} className="mx-2" />
            </a>
          )}
          {instagramProfile && (
            <a
              href={instagramProfile}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={20} className="mx-2" />
            </a>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default PersonCard;
