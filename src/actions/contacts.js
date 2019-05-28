import uuid from 'uuid';
import database from '../firebase/firebase';



// ADD_EXPENSE
export const addContact = (contact) => ({
  type: 'ADD_CONTACT',
  contact
});

export const startAddContact = (contactData = {}) => {
  return (dispatch) => {
    const {
      firstName = '',
    lastName = '',
    phone = 0,
    email = '',
    twitter = '',
    description= '',
   createdAt = 0
    } = contactData;
    const contact = { firstName,
      lastName,
      phone,
      email,
      twitter,
      description,
      createdAt };

    database.ref('contacts').push(contact).then((ref) => {
      dispatch(addContact({
        id: ref.key,
        ...contact
      }));
    });
  };
};



// REMOVE_CONTACT
export const removeContact = ({ id } = {}) => ({
  type: 'REMOVE_CONTACT',
  id
});

export const startRemoveContact = ({ id } = {}) => {
  return (dispatch) => {
    return database.ref(`contacts/${id}`).remove().then(() => {
      dispatch(removeContact({ id }));
    });
  };
};

// EDIT_CONTACT
export const editContact = (id, updates) => ({
  type: 'EDIT_CONTACT',
  id,
  updates
});

export const startEditContact = (id, updates) => {
  return (dispatch) => {
    return database.ref(`contacts/${id}`).update(updates).then(() => {
      dispatch(editContact(id, updates));
    });
  };
};

// SET_CONTACTS
export const setContacts = (contacts) => ({
  type: 'SET_CONTACTS',
  contacts
});

export const startSetContacts = () => {
  return (dispatch) => {
    return database.ref('contacts').once('value').then((snapshot) => {
      const contacts = [];

      snapshot.forEach((childSnapshot) => {
        contacts.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });

      dispatch(setContacts(contacts));
    });
  };
};




// // ADD_CONTACT
// export const addContact = (
//   {
//     firstName = '',
//     lastName = '',
//     phone = 0,
//     email = '',
//     twitter = '',
//     description= '',
//    createdAt = 0
//   } = {}
// ) => ({
//   type: 'ADD_CONTACT',
//   contact: {
//     id: uuid(),
//     firstName,
//     lastName,
//     phone,
//     email,
//     twitter,
//     description,
//     createdAt 
//   }
// });



// // REMOVE_CONTACT
// export const removeContact = ({ id } = {}) => ({
//   type: 'REMOVE_CONTACT',
//   id
// });

// // EDIT_CONTACT
// export const editContact = (id, updates) => ({
//   type: 'EDIT_CONTACT',
//   id,
//   updates
// });