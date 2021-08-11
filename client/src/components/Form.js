import React from "react";

class Form extends React.Component {
  state = {
    fullName: "",
    emailAddress: "",
    number: "",
  };

  change = (e) => {
    this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({
      fullName: "",
      emailAddress: "",
      number: "",
    });
  };

  render() {
    return (
      <form>
        <input
          name="fullName"
          placeholder="Full Name"
          value={this.state.fullName}
          onChange={(e) => this.change(e)}
        />

        <br />

        <input
          name="emailAddress"
          placeholder="Email Address"
          value={this.state.emailAddress}
          onChange={(e) => this.change(e)}
        />

        <br />

        <input
          name="number"
          placeholder="Phone Number"
          value={this.state.number}
          onChange={(e) => this.change(e)}
        />

        <br />

        <button onClick={(e) => this.onSubmit(e)}>Submit</button>
      </form>
    );
  }
}

export default Form;
