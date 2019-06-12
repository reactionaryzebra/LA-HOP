import React, { Component } from "react";
import { withFirebase } from "../Firebase";

class FollowupFormBase extends Component {
  state = {
    fullName: "",
    email: "",
    phone: "",
    description: ""
  };

  handleChange = e => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };

  handleSubmit = async e => {
    e.preventDefault();
    try {
      console.log("success");
    } catch (error) {
      console.log("error");
    }
  };

  render() {
    const { fullName, email, phone, description } = this.state;
    const isInvalid = fullName === "" || email === "" || phone === "";
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="fullName"
          value={fullName}
          onChange={this.handleChange}
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          value={email}
          onChange={this.handleChange}
          placeholder="email"
        />
        <input
          type="tel"
          name="phone"
          value={phone}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="description"
          value={description}
          onChange={this.handleChange}
          placeholder="Tell us more"
        />
        <button disabled={isInvalid} type="submit">
          Submit
        </button>
      </form>
    );
  }
}

const FollowupForm = withFirebase(FollowupFormBase);

export default FollowupForm;
