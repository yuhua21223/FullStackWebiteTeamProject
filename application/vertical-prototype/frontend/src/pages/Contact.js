/**
 * Filename: Contact.js
 * The file contains content about website contributers information
 * if anyone wants to each out them.
 *
 */

import React from 'react';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import './Contact.css';
import { Box } from '@material-ui/core';

export default function AboutUs() {
  return (
    <div>
      {/** Navigation */}
      <Navigation />
      <div className="container">
        {/** Contact Page Content */}
        <h1 className="main_header">Contact</h1>
        <Box mt={10} />

        <div className="sub_container bold">
          <p>For General Questions or Complaints:</p>
          <p>ykc@isharebooks.org - (415) 555-5000</p>

          <Box mt={3} />
          <hr></hr>
          <Box mt={3} />

          <p>For Billing:</p>
          <p>billing@isharebooks.org - (415) 555-6000</p>

          <Box mt={3} />
          <hr></hr>
          <Box mt={3} />

          <p>For UI and UX Issues:</p>
          <p>frontend@isharebooks.org - (415) 555-5001</p>

          <Box mt={3} />
          <hr></hr>
          <Box mt={3} />

          <p>For Connection and Database Issues:</p>
          <p>backend@isharebooks.org - (415) 555-5002</p>
        </div>
      </div>
      {/** Footer */}
      <Footer />
    </div>
  );
}
