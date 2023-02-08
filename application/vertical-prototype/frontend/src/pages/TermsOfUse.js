/**
 * Filename: TermsOfUse.js
 * Description: This file displays content about the terms of use of the website.
 */

import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import './TermsOfUse.css';

// website copyright
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/">
        iShareBooks
      </Link>
      {new Date().getFullYear()}
    </Typography>
  );
}
const TermsOfUse = () => {
  return (
    <div>
      {/** Navigation bar */}
      <Navigation />
      <div className="termsOfUse__Container">
        {/** TermsOfUse Content */}
        <center>
          <h1 className="terms__title"> Terms of Use </h1>
        </center>
        <h5>Date of last revision: April 2021</h5>
        <p>
          {' '}
          Please read these terms of use carefully before using any iShareBooks
          platform.
        </p>{' '}
        <br />
        <h2>
          {' '}
          <u> Terms and Conditions</u>
          <br />
        </h2>
        <p>
          By using this website or ordering any merchandise from iShareBooks,
          you acknowledge that you have read and understand these terms and
          conditions of use ("Terms of Use") and agree to be bound by them, to
          the extent permitted by applicable law. iShareBooks retains the right
          to change or modify these Terms of Use from at its discretion. Please
          review these Terms of Use to ensure your acceptance. If you do not
          agree to these Terms of Use, you are not authorized to use this
          website or to purchase any merchandise from this website.
          <br />
        </p>{' '}
        <br />
        <h2>
          {' '}
          <u> License </u>
          <br />
        </h2>
        <p>
          Your use of this website is under a limited license to access and make
          personal use of this website. This license does not include the right
          to download (except for page caching), modify, reproduce, or resell
          any part of the website's content; use any robot, spider, data miner,
          or other means to extract and gather data from the website; or
          otherwise use this website or any of its content in any manner other
          than the manner in which it is intended to be used, unless you first
          obtain iShareBooks express written consent.
          <br />
        </p>{' '}
        <br />
        <h2>
          {' '}
          <u> Privacy </u>
          <br />
        </h2>
        <p>
          Please review the iShareBooks privacy policy to develop an
          understanding of iShareBooks practices with respect to this important
          issue. iSharebooks privacy notice is part of these Terms of Use and
          its provisions are incorporated herein by this reference. This website
          is hosted and operated in the United States, and is not intended to
          target EU and other non-U.S. residents. If you are accessing this site
          from outside the United States, use and disclosure laws will generally
          differ considerably from U.S. laws and requirements. By using this
          site, you agree and consent to use of your information under these
          Terms of Use and iShareBooks privacy policy.
          <br />
        </p>
        <br />
        <h2>
          {' '}
          <u> Products Detail </u>
          <br />
        </h2>
        <p>
          iShareBooks attempts to make its product descriptions as accurate as
          possible. However, iShareBooks does not warrant that the descriptions
          or other content on this website are accurate, reliable, complete, or
          current. If you receive an item from iSharebooks that is not as it was
          described on the website, your sole remedy is to return it unused for
          a refund.
          <br />
        </p>
        <br />
        <h2>
          {' '}
          <u> Pricing </u>
          <br />
        </h2>
        <p>
          The prices for items on this website are subject to change. It is
          possible for the price of an item to change between the time you add
          it to your shopping cart and the time you check out. Occasionally, an
          item may be mispriced on the website. In that case, the mispriced item
          would appear at the incorrect price even upon checkout. If the correct
          price of an item is higher than the price shown on the website or at
          checkout, iShareBooks may, in its sole discretion, do any one of the
          following: (1) contact you before shipping the item to notify you of
          the correct price and receive instructions from you as to whether you
          want to purchase the item at the correct price; (2) cancel the order
          and notify you of the cancellation; or (3) ship the item to you at the
          incorrect price. No contract will have been formed between you and
          iShareBooks until iShareBooks has charged your credit or debit card,
          or processed another method of payment.
          <br />
        </p>
        <br />
        <h2>
          {' '}
          <u> User Account </u>
          <br />
        </h2>
        <p>
          If you register an account with iShareBooks on this website, you are
          responsible for maintaining the confidentiality of your user name and
          password. You agree to accept full responsibility for all activities
          that take place under your account or password. This website is
          intended for the use of individuals 15 years or older. Users under 15
          may use the website only under the supervision of a parent or legal
          guardian.
          <br />
        </p>
        <br />
        <h2>
          {' '}
          <u> Termination Of Usage </u>
          <br />
        </h2>
        <p>
          iShareBooks may issue a warning, temporarily suspend, indefinitely
          suspend, or terminate your right to use or access all or any part of
          this website, including any account hereon, without notice, for any
          reason in iShareBooks sole discretion, including, without limitation,
          violation of the Terms of Use or iShareBooks belief that such use or
          access would violate any applicable law or would be harmful to the
          interests of, or potentially cause financial loss or legal liability
          to, iShareBooks or another user.
          <br />{' '}
        </p>{' '}
        <br />
        <h2>
          {' '}
          <u> Trademarks </u>
          <br />
        </h2>
        <p>
          iShareBooks, or third parties from whom iShareBooks has permission,
          own the trademarks or service marks that are used on this website. All
          rights are reserved. These and other graphics, logos, service marks,
          trademarks, and trade dress of PiShareBooks and its licensors may not
          be used without prior written consent of iShareBooks or its licensor,
          as the case may be. Without limiting the foregoing, no iSharebooks
          trademark or trade dress may be used in connection with any product or
          service that is not iShareBooks, in any manner that is likely to cause
          confusion among users, or in any manner that disparages or discredits
          iSharebooks.
          <br />
        </p>
        <br />
        <h2>
          {' '}
          <u> CopyRight </u>
          <br />
        </h2>
        <p>
          All proprietary content and materials on this website, including,
          without limitation, this website's layout, organization, and design,
          are protected by copyrights, trademarks, service marks, patents, trade
          secrets, and other proprietary rights and laws. You agree to comply
          with all applicable laws by not copying or using proprietary content,
          except as allowed by these Terms of Use or by written consent of the
          owner of the proprietary rights.
          <br />
        </p>
        <br />
        <h2>
          {' '}
          <u> Notices </u>
          <br />
        </h2>
        <p>
          You consent to receive electronic communications from us via email or
          posting on this website and acknowledge that such communications
          satisfy any legal requirement that the communications be made in
          writing
          <br />
        </p>
        <br />
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
      <div>
        {/** Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default TermsOfUse;
