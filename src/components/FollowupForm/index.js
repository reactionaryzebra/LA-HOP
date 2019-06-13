import React, { Component } from "react";
import { withFirebase } from "../Firebase";
import FollowUp from "../../styles/FollowUp";
import Input from "../../styles/Input";
import FormSubmit from "../../styles/FormSubmit";

class FollowupFormBase extends Component {
  state = {
    fullName: "",
    email: "",
    phone: "",
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
    const { fullName, email, phone, description } = this.state;
    const isInvalid = fullName === "" || email === "" || phone === "";
    return (
      <FollowUp onSubmit={this.handleSubmit}>
        <Input
          type="text"
          name="fullName"
          value={fullName}
          onChange={this.handleChange}
          placeholder="Name"
        />
        <Input
          type="email"
          name="email"
          value={email}
          onChange={this.handleChange}
          placeholder="email"
        />
        <Input
          type="tel"
          name="phone"
          value={phone}
          onChange={this.handleChange}
          placeholder="Phone #"
        />
        <Input
          type="text"
          name="description"
          value={description}
          onChange={this.handleChange}
          placeholder="Tell us more"
        />
        <FormSubmit disabled={isInvalid} type="submit">
          Submit
        </FormSubmit>
      </FollowUp>
    );
  }
}

const FollowupForm = withFirebase(FollowupFormBase);

export default FollowupForm;
