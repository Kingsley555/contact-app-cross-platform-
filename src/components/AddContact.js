import React from 'react';
import { connect } from 'react-redux';
import ContactForm from './ContactForm';
import { startAddContact } from '../actions/contacts';



export class AddContact extends React.Component {
  onSubmit = (contact) => {
    this.props.startAddContact(contact);
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <h1>Add Contact</h1>
        <ContactForm
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddContact: (contact) => dispatch(startAddContact(contact))
});

export default connect(undefined, mapDispatchToProps)(AddContact);

















// const AddContact = props => (
//   <div>
//     <h1>Add Contact</h1>
//     <ContactForm
//       onSubmit={contact => {
//         props.dispatch(startAddContact(contact));
//         props.history.push('/');
//       }}
//     />
//   </div>
// );

// export default connect()(AddContact);
