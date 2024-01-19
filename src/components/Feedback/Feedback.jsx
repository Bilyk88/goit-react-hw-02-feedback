import React, { Component } from 'react';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleClickGood = () => {
    this.setState(prevState => ({ good: (prevState.good += 1) }));
  };
  handleClickNeutral = () => {
    this.setState(prevState => ({ neutral: (prevState.neutral += 1) }));
  };
  handleClickBad = () => {
    this.setState(prevState => ({ bad: (prevState.bad += 1) }));
  };
  countTotalFeedback = () => {
    const totalFeedback = this.state.good + this.state.neutral + this.state.bad;
    return totalFeedback;
  };

  countPositiveFeedbackPercentage = () => {
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedbackPercentage = Math.round(
      (this.state.good / totalFeedback) * 100
    );
    return positiveFeedbackPercentage;
  };

  render() {
    return (
      <div>
        <h2>Please leave feedback</h2>
        <div>
          <button type="button" onClick={this.handleClickGood}>
            Good
          </button>
          <button type="button" onClick={this.handleClickNeutral}>
            Neutral
          </button>
          <button type="button" onClick={this.handleClickBad}>
            Bad
          </button>
        </div>
        <h3>Statistic</h3>
        <div>
          <p>Good: {this.state.good}</p>
          <p>Neutral: {this.state.neutral}</p>
          <p>Bad: {this.state.bad}</p>
          <p>Total: {this.countTotalFeedback()}</p>
          {/* {this.countPositiveFeedbackPercentage() >= 0 && (
            <p>Positive feedback: {this.countPositiveFeedbackPercentage()}%</p>
          )} */}
          <p>
            Positive feedback:{' '}
            {this.countPositiveFeedbackPercentage() >= 0 &&
              this.countPositiveFeedbackPercentage()}
            %
          </p>
        </div>
      </div>
    );
  }
}
