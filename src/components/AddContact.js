import React from 'react';
import { connect } from 'react-redux';
import ContactForm from './ContactForm';
import { addContact } from '../actions/contacts';

const AddContact = props => (
  <div>
    <h1>Add Contact</h1>
    <ContactForm
      onSubmit={contact => {
        props.dispatch(addContact(contact));
        props.history.push('/');
      }}
    />
  </div>
);

export default connect()(AddContact);
