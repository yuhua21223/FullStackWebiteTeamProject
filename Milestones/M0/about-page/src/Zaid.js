import React from 'react';
import zaid from './images/zaid.jpeg';

import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import './index.css';

const Danish = () => {
  return (
    <div>
      <div className="info">
        <div className="name">Zaid Alkhatib</div>
        <img src={zaid} className="photo" alt="photo" />
      </div>
      <div className="infoCards">
        <Card
          style={{
            width: '25rem',
            marginTop: '1.5rem',
            fontSize: '20px',
            height: '20rem',
          }}
        >
          <Card.Body style={{ maxHeight: '4.0rem' }}>
            <Card.Title>About Me</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>
              Hi, This is Zaid Alkhatib,I'm a senior at SFSU and look forward to working with you all!!
            </ListGroupItem>
          </ListGroup>
        </Card>
        <Card
          style={{
            width: '25rem',
            marginTop: '1.5rem',
            height: '20rem',
          }}
        >
          <Card.Body style={{ maxHeight: '4.0rem' }}>
            <Card.Title>Hobbies</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Write Code </ListGroupItem>
            <ListGroupItem>Hangout</ListGroupItem>
            <ListGroupItem>workout</ListGroupItem>
          </ListGroup>
        </Card>
        <Card
          style={{
            width: '25rem',
            marginTop: '1.5rem',
            height: '20rem',
          }}
        >
          <Card.Body style={{ maxHeight: '4.0rem' }}>
            <Card.Title>Future Plans</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Graduate in Fall 2021</ListGroupItem>
            <ListGroupItem>Get a job</ListGroupItem>
          </ListGroup>
        </Card>
      </div>
    </div>
  );
};

export default Danish;
