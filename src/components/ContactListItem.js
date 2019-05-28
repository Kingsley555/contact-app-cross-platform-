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
    <Link to={`/edit/${id}`}>
      <h3>
        {firstName} {lastName}
      </h3>
    </Link>
    <p>{phone} </p>
    <p>{email} </p>
    <p>{twitter} </p>
    <p>{description} </p>

    <p>Created on: {moment(createdAt).format('MMMM Do, YYYY')}</p>
  </div>
);

export default ContactListItem;
