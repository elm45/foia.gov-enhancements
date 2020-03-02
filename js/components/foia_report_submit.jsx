import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reportActions, types } from '../actions/report';
import dispatcher from '../util/dispatcher';

class FoiaReportDataSubmit extends Component {
  static handleClear(event) {
    event.preventDefault();
    reportActions.clearForm();
  }

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleClear = this.handleClear.bind(this);
    this.formIsValid = this.formIsValid.bind(this);
  }

  formIsValid() {
    const validationFieldCheck = [
      this.props.agencyComponentIsValid,
      this.props.dataTypesIsValid,
      this.props.fiscalYearsIsValid,
    ];

    return validationFieldCheck.every(Boolean);
  }

  handleSubmit(event) {
    event.preventDefault();
    const action = event.target.value;
    reportActions.validateForm();
    if (this.formIsValid()) {
      dispatcher.dispatch({
        type: types.REPORT_SUBMISSION_TYPE,
        submissionAction: action,
      });
      if (action === 'view') {
        this.props.history.push('/data.html/results', { view: 'results' });
        // Resets focus to body when (fake) results page loads.
        document.body.focus();
      }
      this.makeApiRequests();
    }
  }

  makeApiRequests() {
    const dataTypes = this.props.selectedDataTypes.reduce((selectedTypes, type) => {
      const typeList = selectedTypes[type.id] || [];
      typeList.push(type);
      selectedTypes[type.id] = typeList;

      return selectedTypes;
    }, {});
    reportActions.fetchAnnualReportData(dataTypes);
  }

  render() {
    return (
      <div className="form-group form-group_footer">
        <button onClick={this.handleSubmit} value="view" type="submit" className="usa-button usa-button-big usa-button-primary-alt with-siblings">View Report</button>
        <button onClick={this.handleSubmit} value="download" type="button" className="usa-button usa-button-big usa-button-outline">Download CSV</button>
        <button onClick={FoiaReportDataSubmit.handleClear} value="clear" type="button" className="button-as-link">Clear Search</button>
      </div>
    );
  }
}

FoiaReportDataSubmit.propTypes = {
  selectedDataTypes: PropTypes.array,
  fiscalYearsIsValid: PropTypes.bool.isRequired,
  dataTypesIsValid: PropTypes.bool.isRequired,
  agencyComponentIsValid: PropTypes.bool.isRequired,
  history: PropTypes.object.isRequired,
};

FoiaReportDataSubmit.defaultProps = {
  selectedDataTypes: [],
};

export default FoiaReportDataSubmit;
