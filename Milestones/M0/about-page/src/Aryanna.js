import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import './index.css';

const Aryanna = () => {
  //return <div>Aryanna</div>;
  return (
    <div>
      <div className="info">
        <div className="name">Aryanna Brown</div>
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
              Hey! I'm Aryanna Yazmin Brown. I'm a senior at SFSU. I enjoy cheerleading and also cheer 
              for the school. In my free time you will catch me eating as many churros as I can handle. 
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
            <ListGroupItem>Cheerleading</ListGroupItem>
            <ListGroupItem>Travelling</ListGroupItem>
            <ListGroupItem>Stretching</ListGroupItem>
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
            <Card.Title>Future Plans</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Graduate in Spring 2021</ListGroupItem>
            <ListGroupItem>Get a job that will help in building my career</ListGroupItem>
          </ListGroup>
        </Card>
      </div>
    </div>
  );
};

export default Aryanna;