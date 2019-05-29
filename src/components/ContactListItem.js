import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const ContactListItem = ({
  id,
  firstName,
  lastName,
  phone,
  email,
  twitter,
  description,
  createdAt
}) => (
  <div>
    <Link className="list-item" to={`/edit/${id}`}>
      <h3 className="list-item__title">
        {firstName} {lastName}
      </h3>
    </Link>
    <p className="list-item__title">
      Phone {''} {phone}{' '}
    </p>
    <p className="list-item__title">
      Email {''} {email}{' '}
    </p>
    <p className="list-item__title">
      Twitter {''} {twitter}{' '}
    </p>
    <p className="list-item__title">
      Description {''} {description}{' '}
    </p>

    <span className="list-item__sub-title">
      <p>
        Created {''} {moment(createdAt).format('MMMM Do, YYYY')}
      </p>
    </span>
    <hr />
  </div>
);

export default ContactListItem;
