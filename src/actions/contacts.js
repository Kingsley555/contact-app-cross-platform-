import uuid from 'uuid';

// ADD_CONTACT
export const addContact = (
  {
    firstName = '',
    lastName = '',
    phone = 0,
    email = '',
    twitter = '',
    description= '',
   createdAt = 0
  } = {}
) => ({
  type: 'ADD_CONTACT',
  contact: {
    id: uuid(),
    firstName,
    lastName,
    phone,
    email,
    twitter,
    description,
    createdAt 
  }
});

// REMOVE_CONTACT
export const removeContact = ({ id } = {}) => ({
  type: 'REMOVE_CONTACT',
  id
});

// EDIT_CONTACT
export const editContact = (id, updates) => ({
  type: 'EDIT_CONTACT',
  id,
  updates
});
