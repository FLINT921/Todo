import React, { Component } from 'react';
import './tasks-filter.css';

export class TasksFilter extends Component {
  state = {
    activeButton: 0,
  };

  onButtonActive = (index) => {
    this.setState({
      activeButton: index,
    });
  };

  render() {
    const { onFilterAll, onFilterActive, onFilterCompleted } = this.props;
    const { activeButton } = this.state;

    return (
      <ul className="filters">
        <li>
          <button
            onClick={() => {
              onFilterAll();
              this.onButtonActive(0);
            }}
            className={activeButton === 0 ? 'selected' : ''}
          >
            All
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              onFilterActive();
              this.onButtonActive(1);
            }}
            className={activeButton === 1 ? 'selected' : ''}
          >
            Active
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              onFilterCompleted();
              this.onButtonActive(2);
            }}
            className={activeButton === 2 ? 'selected' : ''}
          >
            Completed
          </button>
        </li>
      </ul>
    );
  }
}
