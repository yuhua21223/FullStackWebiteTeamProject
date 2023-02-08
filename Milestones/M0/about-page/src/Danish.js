import React from 'react';
import Danishimg from './images/Danish.jpg';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import './index.css';

const Danish = () => {
  return (
    <div>
      <div className="info">
        <div className="name">Danish Siddiqui</div>
        <img src={Danishimg} className="photo" alt="photo" />
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
              Hey! This is Danish Siddiqui. I'm a senior at SFSU. I was born and
              raised in Pakistan. I have been living in San Francisco for almost
              4 years now.
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
            <ListGroupItem>Sports</ListGroupItem>
            <ListGroupItem>Travelling</ListGroupItem>
            <ListGroupItem>Watching movies</ListGroupItem>
            <ListGroupItem>Coding</ListGroupItem>
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
            <ListGroupItem>Graduate in Spring 2021</ListGroupItem>
            <ListGroupItem>Get a good job</ListGroupItem>
            <ListGroupItem>Build a career</ListGroupItem>
          </ListGroup>
        </Card>
      </div>
    </div>
  );
};

export default Danish;
