import React from 'react';
import { connect } from 'react-redux';
import ContactListItem from './ContactListItem';
import visibleContacts from '../selectors/contacts';

const ContactList = props => (
  <div  className="content-container" >
  <div className="list-body">
  {props.contacts.length === 0 ? (
    <p>No Contact</p>
  ) : (
    props.contacts.map(contact => {
      return <ContactListItem  key={contact.id} {...contact} />;
    })
  )}
  </div>
  
  </div>
);

const mapStateToProps = state => {
  return {
    contacts: visibleContacts(state.contacts, state.filters)
  };
};

export default connect(mapStateToProps)(ContactList);
