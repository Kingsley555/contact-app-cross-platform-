import React from 'react';
import { connect } from 'react-redux';
import ContactForm from './ContactForm';
import { editContact, removeContact } from '../actions/contacts';

const EditContact = props => {
  return (
    <div>
      <ContactForm
        contact={props.contact}
        onSubmit={contact => {
          props.dispatch(editContact(props.contact.id, contact));
          props.history.push('/');
        }}
      />
      <button
        onClick={() => {
          props.dispatch(removeContact({ id: props.contact.id }));
          props.history.push('/');
        }}
      >
        Delete Contact
      </button>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    contact: state.contacts.find(
      contact => contact.id === props.match.params.id
    )
  };
};

export default connect(mapStateToProps)(EditContact);
