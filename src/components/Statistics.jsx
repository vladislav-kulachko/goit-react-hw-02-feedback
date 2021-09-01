import React, {Component} from 'react';
import s from './Statistics.module.css';

class Statistics extends Component {
  countTotalFeedback = () => {
    const state = Object.values(this.props.state);
    const total = state.reduce((a, i) => a + i);
    return total;
  };
  countPositiveFeedbackPercentage = () => {
    const state = Object.values(this.props.state);
    const total = state.reduce((a, i) => a + i);
    const posPercent = Math.round((state[0] / total) * 100);
    return posPercent;
  };

  render() {
    const state = this.props.state;
    return (
      <>
        {Object.values(state).find(value => value > 0) ? (
          <div className={s.container}>
            <h2 className={s.title}>Statistics:</h2>
            <ul className={s.list}>
              {Object.keys(state).map((key, i) => (
                <li key={key} className={s.item}>
                  {key.slice(0, 1).toUpperCase() + key.slice(1)}:{' '}
                  <span className={s.value}>{Object.values(state)[i]}</span>
                </li>
              ))}
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
