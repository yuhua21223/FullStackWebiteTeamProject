/**
 * Filename: App Faq.js
 * Description: This file displays the faqs related to website.
 */

import React from 'react';
import { NavbarBrand } from 'react-bootstrap';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './Faq.css';

const AppFaq = () => {
  return (
    <div className="faq__container" id="faq">
      {/** FAQ Content */}
      <div className="faq">
        <NavbarBrand
          style={{
            color: 'white',
            fontSize: '60px',
            fontWeight: 900,
          }}
        >
          FAQs
        </NavbarBrand>
        <container className="faq_div">
          <Accordion className="faq__accor">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="expand__icon" />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className="faq__qs">
                Q.What is the benefit of creating an account when one can simple
                buy as a general user?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="faq__answers">
                We'll need to send you order confirmations, shipping
                information, buyback reminders, and communications like that
                about your order. It's really easy to create one - you just need
                an email and password - and once you have an account with us
                you'll be able to: place orders quickly and easily, track your
                orders online, access your order history, and buyback
                information, and other reminders.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="faq__accor">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="expand__icon" />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className="faq__qs">
                Q. Are transactions safe?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="faq__answers">
                Yes, iShareBooks provides internset security by hosting our site
                on a secure server. And by creating secure areas on the web site
                for the transfer of confidential information such as credit card
                number in our store.When using internet browser, for example,
                you'll know an area of the site is secure when you see a lock in
                the bottom left order of your screen.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="faq__accor">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="expand__icon" />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className="faq__qs">
                Q. How can I cancel or change my order?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="faq__answers">
                You can cancel your order or make a change to it by contacting
                us at +1 415-123-4567 or at help@isharebook.com as soon as
                possible after your order is placed with your name, order
                number, and a request for cancellation or a description of the
                requested change. We will do our best to cancel or modify your
                order, but we will not be able to complete the cancellation if
                your order has been processed or shipped.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="faq__accor">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="expand__icon" />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className="faq__qs">
                Q. I have a rather old, rare book and I'd like to find out how
                much it's worth.
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="faq__answers">
                Please see the online version of the ALA brochure, "Your Old
                Books," for further assistance. Also see the web site of the
                Antiquarian Booksellers' Association of America (ABAA). And see
                the Appraisals page for additional resources, including links to
                the websites of professional appraiser organizations which let
                you conduct "Find an Appraiser" online directory searches.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="faq__accor">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="expand__icon" />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className="faq__qs">
                Q. How many books were read last year?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="faq__answers">
                There is no reliable way to obtain this information. The closest
                reliable statistic is the figure for the "Reading books" leisure
                activity which appears in the Statistical Abstract of the United
                States published annually by the U.S. Census Bureau (until
                2011). The Statistical Abstract series is available online and
                the tables reporting statistics appear as Adobe Reader PDF
                documents. See the Arts, Recreation, & Travel: Recreation and
                Leisure Activities section of the 2012 edition of the
                publication, to find Table 1240. Adult Participation in Selected
                Leisure Activities.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="faq__accor">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="expand__icon" />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className="faq__qs">
                Q. I'm looking for the Books That Shaped America List.
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="faq_details">
              <Typography className="faq__answers">
                Actually, it was the Library of Congress, not the American
                Library Association, that created the Books That Shaped America
                List, which is actually the 88 titles selected to be part of
                their "Books That Shaped America" exhibition, running June 25 -
                September 29, 2012. The exhibition marked the beginning of a
                multiyear "Celebration of the Book," a series of programs,
                symposia and other events that explore the important and varied
                ways that books influence our lives. You can find the list and
                additional resources on the Library of Congress website:
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="faq__accor">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="expand__icon" />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className="faq__qs">
                Q. What is your return/exchange policy?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="faq__answers">
                You may return items purchased within 30 days from the day you
                received your order and receive a full refund. Refund will be
                credited to original credit card used for payment. Please see
                return policy for additional information.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </container>
      </div>
    </div>
  );
};

export default AppFaq;
