import React, { Component } from "react";
import { withFirebase } from "../Firebase";
import FollowUp from "../../styles/FollowUp";
import Input from "../../styles/Input";
import Select from "../../styles/Select";
import FormSubmit from "../../styles/FormSubmit";
import Button from "../../styles/Button";

const describeOptions = [
  { display: "Concerned Resident", value: "resident" },
  { display: "Business Owner", value: "busOwner" },
  { display: "First Responder (Medical, Fire or Police)", value: "responder" },
  { display: "Social Service Provider", value: "socialService" },
  {
    display: "Government Employee (Local, State or Federal)",
    value: "govEmployee"
  },
  { display: "Elected Official", value: "official" },
  { display: "Other", value: "other" }
];

class FollowupFormBase extends Component {
  state = {
    fullName: "",
    email: "",
    phone: "",
    business: "",
    description: "",
    error: null
  };

  handleChange = e => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };

  handleSubmit = async e => {
    const { setSubmitted } = this.props;
    e.preventDefault();
    try {
      console.log("success");
      setSubmitted(true);
    } catch (error) {
      this.setState({ error });
    }
  };

  render() {
    const { fullName, email, phone, description, business } = this.state;
    const isInvalid = fullName === "" || email === "" || phone === "";
    return (
      <FollowUp onSubmit={this.handleSubmit}>
        <Input
          type="text"
          name="fullName"
          value={fullName}
          onChange={this.handleChange}
          placeholder="Name*"
        />
        <Input
          type="text"
          name="business"
          value={business}
          onChange={this.handleChange}
          placeholder="Business"
        />
        <Input
          type="email"
          name="email"
          value={email}
          onChange={this.handleChange}
          placeholder="Email*"
        />
        <Input
          type="tel"
          name="phone"
          value={phone}
          onChange={this.handleChange}
          placeholder="Phone Number*"
        />
        <Select>
          <option>Describe yourself...</option>
          {describeOptions.map(option => (
            <option value={option.value}>{option.display}</option>
          ))}
        </Select>
        <Button disabled={isInvalid} type="submit">
          COMPLETE
        </Button>
      </FollowUp>
    );
  }
}

const FollowupForm = withFirebase(FollowupFormBase);

export default FollowupForm;
