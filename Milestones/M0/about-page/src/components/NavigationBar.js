import React from 'react';
import '../index.css';
import { Nav } from 'react-bootstrap';

const NavigationBar = () => {
  return (
    <Nav variant="tabs" className="navbar">
      <strong className="about">About Page</strong>
      <Nav.Item>
        <Nav.Link href="/">Yangesh</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/danish">Danish</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/abishek">Abishek</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/aryanna">Aryanna</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/pramod">Pramod</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/zaid">Zaid</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default NavigationBar;
