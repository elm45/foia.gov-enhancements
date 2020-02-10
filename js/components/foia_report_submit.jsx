import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reportActions } from '../actions/report';

class FoiaReportDataSubmit extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDownloadCSV = this.handleDownloadCSV.bind(this);
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
    if (!this.formIsValid()) {
    } else {
      reportActions.fetchAnnualReportData(this.props.selectedDataTypes);
    }
    reportActions.returnFieldValidationStateOnSubmit();
  }

  handleDownloadCSV(event) {
    if (!this.formIsValid()) {
      event.preventDefault();
    } else {
      // print the CSV
    }
    reportActions.returnFieldValidationStateOnSubmit();
  }

  render() {
    return (
      <div className="form-group form-group_footer">
        <button onClick={this.handleSubmit} type="submit" className="usa-button usa-button-big usa-button-primary-alt with-siblings">View Report</button>
        <button onClick={this.handleDownloadCSV} type="button" className="usa-button usa-button-big usa-button-outline">Download CSV</button>
        <a>Clear Search</a>
      </div>
    );
  }
}

FoiaReportDataSubmit.propTypes = {
  selectedDataTypes: PropTypes.array,
  fiscalYearsIsValid: PropTypes.bool.isRequired,
  dataTypesIsValid: PropTypes.bool.isRequired,
  agencyComponentIsValid: PropTypes.bool.isRequired,
};

FoiaReportDataSubmit.defaultProps = {
  selectedDataTypes: [],
};

export default FoiaReportDataSubmit;
