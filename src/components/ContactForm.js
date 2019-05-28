import React, { Component } from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: props.contact ? props.contact.firstName : '',
      lastName: props.contact ? props.contact.lastName : '',
      phone: props.contact ? props.contact.phone : '',
      email: props.contact ? props.contact.email : '',
      twitter: props.contact ? props.contact.twitter : '',
      description: props.contact ? props.contact.description : '',
      createdAt: props.contact ? moment(props.contact.createdAt) : moment(),
      calendarFocused: false,
      error: ''
    };
  }

  onfirstNameChange = e => {
    const firstName = e.target.value;
    this.setState(() => ({ firstName }));
  };
  onlastNameChange = e => {
    const lastName = e.target.value;
    this.setState(() => ({ lastName }));
  };
  onPhoneChange = e => {
    const phone = e.target.value;

    this.setState(() => ({ phone }));
  };
  onEmailChange = e => {
    const email = e.target.value;
    this.setState(() => ({ email }));
  };
  onTwitterChange = e => {
    const twitter = e.target.value;
    this.setState(() => ({ twitter }));
  };
  onDescriptionChange = e => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };

  onDateChange = createdAt => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };

  onSubmit = e => {
    e.preventDefault();

    if (!this.state.firstName && !this.state.phone) {
      this.setState(() => ({ error: 'Please provide your name and phone' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        phone: this.state.phone,
        email: this.state.email,
        twitter: this.state.twitter,
        description: this.state.description,
        createdAt: this.state.createdAt.valueOf()
      });
    }
  };

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="First name"
            autoFocus
            value={this.state.firstName}
            onChange={this.onfirstNameChange}
          />
          <input
            type="text"
            placeholder="last name"
            value={this.state.lastName}
            onChange={this.onlastNameChange}
          />
          <input
            type="number"
            placeholder="Phone"
            value={this.state.phone}
            onChange={this.onPhoneChange}
          />
          <input
            type="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.onEmailChange}
          />
          <input
            type="text"
            placeholder="Twitter handle"
            value={this.state.twitter}
            onChange={this.onTwitterChange}
          />
          <textarea
            placeholder="Description"
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />

          <button>Add Contact</button>
        </form>
      </div>
    );
  }
}

export default ContactForm;
