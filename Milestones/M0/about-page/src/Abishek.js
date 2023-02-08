import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import './index.css';

const Abishek = () => {
  return (
    <div>
      <div className="info">
        <div className="name">Abishek Neralla</div>
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
              Hey! I am Abishek Neralla. I am a 4th year student at SFSU studying undergraduate in computer science. I enjoy watching and playing
              basketball and coding ofcource. 
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
            <ListGroupItem>basketball</ListGroupItem>
            <ListGroupItem>Piano</ListGroupItem>
            <ListGroupItem>Coding</ListGroupItem>
            <ListGroupItem>Watching Movies</ListGroupItem>
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
            <Card.Title>In the future</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>My goal is to start my own company sometime soon</ListGroupItem>
            <ListGroupItem>Help make the world a better place</ListGroupItem>
          </ListGroup>
        </Card>
      </div>
    </div>
  );
};

export default Abishek