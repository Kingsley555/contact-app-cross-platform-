import React from 'react';
import { connect } from 'react-redux';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import {
  setTextFilter,
  sortByAlphabet,
  sortByDate,
  setStartDate,
  setEndDate
} from '../actions/filters';

class ContactListFilters extends React.Component {
  state = {
    calendarFocused: null
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };
  onFocusChange = calendarFocused => {
    this.setState(() => ({ calendarFocused }));
  };
  onTextChange = e => {
    this.props.setTextFilter(e.target.value);
  };

  onSortChange = e => {
    if (e.target.value === 'date') {
      this.props.sortByDate();
    } else if (e.target.value === 'alphabet') {
      this.props.sortByAlphabet();
    }
  };

  render() {
    return (
      <div className="content-container">
        <div className="input-group">
          <div className=" input-group input-group__item">
            <input
            placeholder="Search"
              type="text"
              value={this.props.filters.text}
              onChange={this.onTextChange}
            />
          </div>
          <div className="input-group__item">
            <select
              className="select"
              value={this.props.filters.sortBy}
              onChange={this.onSortChange}
            >
              <option value="alphabet">Names</option>
              <option value="date">Date</option>
            </select>
          </div>
          <div className="input-group__item">
            
            <DateRangePicker
              startDate={this.props.filters.startDate}
              startDateId={'startDateID'}
              endDate={this.props.filters.endDate}
              onDatesChange={this.onDatesChange}
              endDateId={'endDateId'}
              focusedInput={this.state.calendarFocused}
              onFocusChange={this.onFocusChange}
              showClearDates={true}
              numberOfMonths={1}
              isOutsideRange={() => false}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    filters: state.filters
  };
};

const mapDispatchToProps = dispatch => ({
  setTextFilter: text => dispatch(setTextFilter(text)),
  sortByDate: () => dispatch(sortByDate()),
  sortByAlphabet: () => dispatch(sortByAlphabet()),
  setStartDate: startDate => dispatch(setStartDate(startDate)),
  setEndDate: endDate => dispatch(setEndDate(endDate))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactListFilters);
