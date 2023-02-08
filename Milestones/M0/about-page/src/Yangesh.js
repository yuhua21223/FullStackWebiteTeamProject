import React from 'react';
import {Col } from 'react-bootstrap'
import kcimg from './images/poc.png';
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa'
import {IconContext } from 'react-icons'
const Yangesh = () => {
 
    return (
        <React.Fragment >
          <div className ="backg">
		   {/*npm i react-mdl*/}
              <div style={{width:'100%', margin:'auto'}}>
          
                 <img src={kcimg}  alt='avatar' className="avatar-img"/>          
              </div>

             
              <div className="banner-text">
                <h1> Yangesh KC</h1>
                  <h2> <i>Full Stack Web Developer</i></h2>
                  <hr/>
                   <i class="fab fa-google">
                   <h3>Skills:</h3>

       
                   <p> HTML/CSS | Bootstrap | Python | C++ | Java | JavaScript | React | ReactNative | NodeJS | Express | MongoDB | GoogleCloud |NLP </p></i>
                
                </div>
            
             </div>  

             <h6> .</h6>
             <div> 
                 <h1 className="content">Senior @SFSU </h1>
                 <h2 className="contents">Energetic University Student with an upcoming Bachelor in Computer Science.Detail-oriented and motivated to stay on task, meet aggressive timelines and accomplish goals. Enthusiastic, Fast learner and Dedicated to working hard to make positive contributions.</h2>
                
             </div>

                <div className="tags"><IconContext.Provider value={{color: 'darkslategray', size:'3rem'}}>
                <Col xs lg="2"><a href="https://www.facebook.com/"><FaFacebook/></a></Col>
                <Col xs lg="2"><a href="https://www.linkedin.com/signup/cold-join?session_redirect=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2Ffeed%2F&trk=login_reg_redirect"><FaLinkedin/></a></Col>
                <Col xs lg="2"><a href="https://github.com/"><FaGithub/></a></Col>
           </IconContext.Provider></div>

        </React.Fragment>


    )


};

export default Yangesh;
