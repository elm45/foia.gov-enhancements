import PropTypes from 'prop-types';
import React, { Component } from 'react';
import dispatcher from '../util/dispatcher';

class CheckboxSelectorLinks extends Component {
  constructor(props) {
    super(props);

    this.selectAll = this.selectAll.bind(this);
    this.selectNone = this.selectNone.bind(this);
  }

  selectAll(e) {
    e.preventDefault();
    let containerID = document.getElementById(this.props.componentID);
    let checkboxes = containerID.querySelectorAll('input[type="checkbox"]');
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].type == 'checkbox')
        checkboxes[i].checked = true;
    }
  }

  selectNone(e) {
    e.preventDefault();
    let containerID = document.getElementById(this.props.componentID);
    let checkboxes = containerID.querySelectorAll('input[type="checkbox"]');
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].type == 'checkbox')
        checkboxes[i].checked = false;
    }
  }

  render() {
    return (
      <div className="form-group">
        <ul className="inline-list">
          <li><a href="#" onClick={this.selectAll}>Select All</a></li>
          <li><a href="#" onClick={this.selectNone}>Select None</a></li>
        </ul>
      </div>
    );
  }
}

CheckboxSelectorLinks.propTypes = {
  componentID: PropTypes.string.isRequired,
};

export default CheckboxSelectorLinks;

