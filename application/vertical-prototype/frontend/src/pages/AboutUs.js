/**
 *  Filename: AboutUs.js
 *  Description: The file contains the information about what the website is
 * about and services it is providing to the intending users.
 */

import React from 'react';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import './AboutUs.css';
import { Box } from '@material-ui/core';

export default function AboutUs() {
  return (
    <div>
      {/** Navigation Bar */}
      <Navigation />

      {/** About Us Page Content */}
      <div className="container">
        <h1 className="aboutus__title">ABOUT US</h1>
        <h1 className="main_header gray">
          We are a small startup with{' '}
          <font className="bold black">ambitious goals</font>
        </h1>

        <div className="sub_container bold">
          <h2>Who We Are</h2>
          <p className="gray">
            We are a group of students studying Computer Science at SFSU.
          </p>
        </div>

        <div className="sub_container bold">
          <h2>Our Mission</h2>
          <p className="gray">
            As students, we know how it feels to have to spend hundreds of
            dollars each semester to invest into overpriced books that we would
            not even need after six months. With iShareBooks, we intend to
            eliminate this process and save students a few thousand dollars on
            average during college.
          </p>
        </div>

        <div className="sub_container bold">
          <h2>How Does it Work?</h2>
          <p className="gray">
            To eliminate having to purchase books directly from publishers, our
            app allows you, the student to directly list your textbooks. This
            allows you to set your own price. In order to keep prices low, we do
            encourage everyone to look up market prices for the textbook prior
            to posting a book on the market.
          </p>
          <Box mt={4} />
          <p className="gray">
            {' '}
            It's that simple! To reiterate, you need to:
            <ol>
              <li>Create an account and log in</li>
              <li>Get your textbook</li>
              <li>Click on post book</li>
              <li>Fill up the book details and include a photo of your book</li>
            </ol>
          </p>
        </div>

        {/** Website Contributers Introduction */}
        <div className="sub_container bold">
          <h2>Meet the Team</h2>
          <h3 className="bold">KC</h3>
          <h4>Team Lead</h4>
          <p className="gray">info</p>

          <h3 className="bold">Danish</h3>
          <h4>Frontend Lead</h4>
          <p className="gray">info</p>

          <h3 className="bold">Zaid </h3>
          <h4>Backend Lead</h4>
          <p className="gray">info</p>

          <h3 className="bold">Mark</h3>
          <h4>Software Engineer</h4>
          <p className="gray">info</p>

          <h3 className="bold">Aryanna</h3>
          <h4>Member (Frontend) </h4>
          <p className="gray">info</p>

          <h3 className="bold">Gavin</h3>
          <h4>Member (Frontend) </h4>
          <p className="gray">info</p>

          <h3 className="bold">Abishek</h3>
          <h4>Member (Backend) </h4>
          <p className="gray">info</p>

          <h3 className="bold">Pramod</h3>
          <h4>Member (Frontend) </h4>
          <p className="gray">info</p>
        </div>
      </div>
      {/** Footer */}
      <Footer />
    </div>
  );
}
