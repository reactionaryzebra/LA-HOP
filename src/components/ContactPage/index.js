import React from "react";
import Contact from "../../styles/Contact";
import Input from "../../styles/Input";
import FormSubmit from "../../styles/FormSubmit";

const helpOptions = [
  { value: "dashboards", display: "Dashboards" },
  { value: "hmis", display: "HMIS" },
  { value: "grievances", display: "Grievances" },
  { value: "count", display: "Homeless Count" },
  { value: "ert", display: "Homeless Services (Emergency Response Team)" },
  { value: "hop", display: "LA-HOP" },
  { value: "media", display: "Media Inquiry" },
  { value: "nofa", display: "NOFA" },
  { value: "reporting", display: "Outcomes/Reporting" },
  { value: "procurement", display: "Procurement Opportunities" },
  { value: "support", display: "Technical/Web Support" }
];

const ContactPage = () => (
  <Contact>
    <header>
      <div>
        <h2>Contact Us</h2>
        <p>We want to hear from you!</p>
      </div>
    </header>
    <img src="images/ContactImage.png" />
    <h2>Message Us</h2>
    <div className="messageUs">
      <form>
        <label>What can we help you with?</label>
        <select>
          <option>***Select a topic***</option>
          {helpOptions.map(option => (
            <option value={option.value}>{option.display}</option>
          ))}
        </select>
        <Input type="email" placeholder="Your E-Mail" />
        <label>Your Message</label>
        <textarea placeholder="Your Message" />
        <FormSubmit>Send</FormSubmit>
      </form>
    </div>
    <h2>Contact Us</h2>
    <p>
      Question, comment or concern? Our contact form is the best way to get in
      touch with someone at LAHSA.
    </p>
    <h2>Address</h2>
    <p>
      811 Wilshire Blvd.
      <br />
      6th Floor,
      <br />
      Los Angeles, CA 90017
    </p>
    <div className="phoneNumbers">
      <div>
        <img src="images/phone-icon.png" />
        <h3>(213) 683-333</h3>
      </div>
      <div>
        <img src="images/fax-icon.png" />
        <h3>(213) 553-8488</h3>
      </div>
      <div>
        <img src="images/other-phone-icon.png" />
        <h3>(213) 892-0093</h3>
      </div>
    </div>
    <FormSubmit>JOIN OUR MAILING LIST</FormSubmit>
  </Contact>
);

export default ContactPage;
