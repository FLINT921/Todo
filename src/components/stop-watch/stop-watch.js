import React, { Component } from 'react';

export default class Stopwatch extends Component {
  constructor(props) {
    super(props);
    const savedTime = localStorage.getItem(`elapsedTime_${props.id}`);
    const savedRunning = localStorage.getItem(`running_${props.id}`) === 'true';
    const lastUpdateTime = localStorage.getItem(`lastUpdateTime_${props.id}`);
    this.state = {
      elapsedTime: savedTime ? parseInt(savedTime, 10) : props.timer,
      running: savedRunning,
      lastUpdateTime: lastUpdateTime ? parseInt(lastUpdateTime, 10) : Date.now(),
    };
    this.animationFrameId = null;
  }

  componentDidMount() {
    if (this.state.running) {
      this.runStopwatch();
    }
  }

  componentWillUnmount() {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
  }

  startStopwatch = () => {
    if (this.state.running) return;

    const now = Date.now();
    this.setState({ running: true, lastUpdateTime: now }, () => {
      localStorage.setItem(`running_${this.props.id}`, true);
      localStorage.setItem(`lastUpdateTime_${this.props.id}`, now);
      this.runStopwatch();
    });
  };

  runStopwatch = () => {
    this.animationFrameId = requestAnimationFrame(() => {
      const now = Date.now();
      const elapsedTime = this.state.elapsedTime - (now - this.state.lastUpdateTime);

      if (elapsedTime > 0) {
        this.setState(
          {
            elapsedTime,
            lastUpdateTime: now,
          },
          () => {
            localStorage.setItem(`elapsedTime_${this.props.id}`, elapsedTime);
            localStorage.setItem(`lastUpdateTime_${this.props.id}`, now);
            this.runStopwatch();
          },
        );
      } else {
        this.stopStopwatch();
        this.setState({
          elapsedTime: this.props.timer,
        });
        localStorage.removeItem(`elapsedTime_${this.props.id}`);
      }
    });
  };

  stopStopwatch = () => {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
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
