import React from "react";

function Form() {
  const state = {
    fullName: "",
    emailAddress: "",
    number: "",
  };

  const change = (e) => {
    this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form>
      <input
        name="fullName"
        placeholder="Full Name"
        value={this.state.fullName}
        onChange={(e) => change(e)}
      />

      <br />

      <input
        name="emailAddress"
        placeholder="Email Address"
        value={this.state.emailAddress}
        onChange={(e) => change(e)}
      />

      <br />

      <input
        name="number"
        placeholder="Phone Number"
        value={this.state.number}
        onChange={(e) => change(e)}
      />

      <br />

      <button onClick={(e) => this.onSubmit(e)}>Submit</button>
    </form>
  );
}

export default Form;
