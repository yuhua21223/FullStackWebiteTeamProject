import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import PramodImg from './images/pramod.jpg'
import './index.css';
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa'
import {IconContext } from 'react-icons'


const Pramod = () => {
  return <div>
    <Container fluid>
    
     <Row>
       <Col xs lg ="6"><img src = {PramodImg}  atl = "pramodimage" className="img-fluid"  style={{width: '600px'}}/></Col>
       <Col> <h1> <br></br> <br></br> Hi there,
         I am Pramod.</h1> <br></br><br></br>
         <p> I am a senior computer science major st SFSU.</p>
         <p> My fields of interest are game development, Linux development and cyber security.</p>
         <p> When, I am not studying, I like to go hiking, biking, road trips and play soccer.</p> <br></br>
         <p> Let's connect socially:</p>
         <Row>
           <IconContext.Provider value={{color: 'darkslategray', size:'5rem'}}>
           <Col xs lg="2"><a href="https://www.facebook.com/"><FaFacebook/></a></Col>
           <Col xs lg="2"><a href="https://www.linkedin.com/signup/cold-join?session_redirect=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2Ffeed%2F&trk=login_reg_redirect"><FaLinkedin/></a></Col>
           <Col xs lg="2"><a href="https://github.com/"><FaGithub/></a></Col>
           </IconContext.Provider>
         </Row>
         </Col>
     </Row>
    </Container>
    </div>;
};

export default Pramod;
