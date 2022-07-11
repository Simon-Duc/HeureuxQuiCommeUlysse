import React, {Component} from 'react';

class SignUp extends Component {
  constructor() {
    super();
    this.updateField = this.updateField.bind(this);
    this.state = {
      email: "mon@email.com",
      password: "monPassw0rd",
      name: "James",
      lastname: "Bond"
    };
  }

  updateField(event){
    this.setState({
      email: event.target.value,
      password: event.target.value,
      name: event.target.value,
      lastname: event.target.value
    });
  }

  render() {
    return(
    <div className="form">
      <h1>{JSON.stringify(this.state)}</h1>
      <label htmlFor="email">Email:</label>
      <input className="input" onChange={this.updateField} id="email" type="email" name="email" />
      <label htmlFor="password">Password:</label>
      <input className="input" onChange={this.updateField} id="password" type="password" name="password" />
      <label htmlFor="passwordbis">Password bis:</label>
      <input className="input" onChange={this.updateField} id="passwordbis" type="password" name="passwordbis" />
      <label htmlFor="name">Name:</label>
      <input className="input" onChange={this.updateField} id="name" type="test" name="name" />
      <label htmlFor="lastname">Lastname:</label>
      <input className="input" onChange={this.updateField} id="lastname" type="text" name="lastname" />
      <input type="submit" value="Soumettre" />
    </div>);
  }
}

export default SignUp;