import React, {Component} from 'react';
import s from './Statistics.module.css';

class Statistics extends Component {
  countTotalFeedback = () => {
    const {good, neutral, bad} = this.props.state;
    const total = good + neutral + bad;
    return total;
  };
  countPositiveFeedbackPercentage = () => {
    const {good, neutral, bad} = this.props.state;
    const posPercent = Math.round((good / (good + neutral + bad)) * 100);
    return posPercent;
  };

  render() {
    const {good, neutral, bad} = this.props.state;

    return (
      <>
        {Object.values(this.props.state).find(value => value > 0) ? (
          <div className={s.container}>
            <h2 className={s.title}>Statistics</h2>
            <ul className={s.list}>
              <li className={s.item}>
                Good: <span className={s.value}>{good}</span>
              </li>
              <li className={s.item}>
                Neutral: <span className={s.value}>{neutral}</span>
              </li>
              <li className={s.item}>
                Bad: <span className={s.value}>{bad}</span>
              </li>
              <li className={s.item}>
                Total:{' '}
                <span className={s.value}>{this.countTotalFeedback()}</span>
              </li>
              <li className={s.item}>
                Positive feedback:{' '}
                <span className={s.value}>
                  {this.countPositiveFeedbackPercentage()}%
                </span>
              </li>
            </ul>
          </div>
        ) : (
          <>{this.props.children}</>
        )}
      </>
    );
  }
}
export default Statistics;
