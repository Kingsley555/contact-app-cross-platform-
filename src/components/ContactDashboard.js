import React from 'react';
import ContactList from './ContactList';
import ContactListFilters from './ContactListFilters';

const ContactDashboard = () => (
  <div>
    <ContactListFilters />
    <ContactList />
  </div>
);

export default ContactDashboard;
