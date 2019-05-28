import React from 'react';
import { connect } from 'react-redux';
import ContactForm from './ContactForm';
import { startEditContact, startRemoveContact } from '../actions/contacts';

export class EditContact extends React.Component {
  onSubmit = (contact) => {
    this.props.startEditContact(this.props.contact.id, contact);
    this.props.history.push('/');
  };
  onRemove = () => {
    this.props.startRemoveContact({ id: this.props.contact.id });
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <ContactForm
          contact={this.props.contact}
          onSubmit={this.onSubmit}
        />
        <button onClick={this.onRemove}>Delete Contact</button>
      </div>
    );
  }
};

const mapStateToProps = (state, props) => ({
  contact: state.contacts.find((contact) => contact.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
  startEditContact: (id, contact) => dispatch(startEditContact(id, contact)),
  startRemoveContact: (data) => dispatch(startRemoveContact(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditContact);





// import React from 'react';
// import { connect } from 'react-redux';
// import ContactForm from './ContactForm';
// import { starteditContact, startRemoveContact } from '../actions/contacts';

// const EditContact = props => {
//   return (
//     <div>
//       <ContactForm
//         contact={props.contact}
//         onSubmit={contact => {
//           props.dispatch(editContact(props.contact.id, contact));
//           props.history.push('/');
//         }}
//       />
//       <button
//         onClick={() => {
//           props.dispatch(removeContact({ id: props.contact.id }));
//           props.history.push('/');
//         }}
//       >
//         Delete Contact
//       </button>
//     </div>
//   );
// };

// const mapStateToProps = (state, props) => {
//   return {
//     contact: state.contacts.find(
//       contact => contact.id === props.match.params.id
//     )
//   };
// };

// export default connect(mapStateToProps)(EditContact);