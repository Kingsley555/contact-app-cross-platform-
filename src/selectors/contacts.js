import moment from 'moment';

// Logic for Search text, date filter and listing names alphabetically

export default (contacts, { text, sortBy, startDate, endDate }) => {
  return contacts
    .filter(contact => {
      const createdAtMoment = moment(contact.createdAt);
      const startDateMatch = startDate
        ? startDate.isSameOrBefore(createdAtMoment, 'day')
        : true;
      const endDateMatch = endDate
        ? endDate.isSameOrAfter(createdAtMoment, 'day')
        : true;
      const textMatch =
        contact.firstName.toLowerCase().includes(text.toLowerCase()) ||
        contact.lastName.toLowerCase().includes(text.toLowerCase());

      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === 'alphabet') {
        return a.firstName > b.firstName ? 1 : -1;
      } else if (sortBy === 'date') {
        return a.createdAt < b.createdAt ? 1 : -1;
      }
    });
};
