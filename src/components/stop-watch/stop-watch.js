import React, { Component } from 'react';

export default class Stopwatch extends Component {
  constructor(props) {
    super(props);
    const savedTime = localStorage.getItem(`elapsedTime_${props.id}`);
    const savedRunning = localStorage.getItem(`running_${props.id}`) === 'true';
    this.state = {
      elapsedTime: savedTime ? parseInt(savedTime, 10) : props.timer,
      running: savedRunning,
    };
    this.stopwatchInterval = null;
  }

  componentDidMount() {
    if (this.state.running) {
      this.startStopwatch();
    }
  }

  componentWillUnmount() {
    clearInterval(this.stopwatchInterval);
  }

  startStopwatch = () => {
    if (this.state.running) return;

    this.setState({ running: true }, () => {
      localStorage.setItem(`running_${this.props.id}`, true);
      this.stopwatchInterval = setInterval(() => {
        if (this.state.elapsedTime > 0) {
          this.setState((prevState) => {
            const newElapsedTime = prevState.elapsedTime - 1000;
            localStorage.setItem(`elapsedTime_${this.props.id}`, newElapsedTime);
            return { elapsedTime: newElapsedTime };
          });
        } else {
          this.stopStopwatch();
          this.setState({
            elapsedTime: this.props.timer,
          });
          localStorage.removeItem(`elapsedTime_${this.props.id}`);
        }
      }, 1000);
    });
  };

  stopStopwatch = () => {
    clearInterval(this.stopwatchInterval);
    this.setState({ running: false }, () => {
      localStorage.setItem(`running_${this.props.id}`, false);
    });
  };

  updateStopwatchDisplay = () => {
    const totalSeconds = Math.floor(this.state.elapsedTime / 1000);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const format = (num) => (num < 10 ? `0${num}` : num);
    return `${format(minutes)}:${format(seconds)}`;
  };

  render() {
    return (
      <div>
        <button onClick={this.startStopwatch} className='icon icon-play'></button>
        <button onClick={this.stopStopwatch} className='icon icon-pause'></button>
        {this.updateStopwatchDisplay()}
      </div>
    );
  }
}
