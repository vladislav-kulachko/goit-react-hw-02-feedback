import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    top: '0px',
    left: '0px',
    width: '0px',
    height: '0px',
  };

  handleIncrement = e => {
    if (e.target.name === 'good') {
      this.setState(prevState => ({good: prevState.good + 1}));
    } else if (e.target.name === 'neutral') {
      this.setState(prevState => ({neutral: prevState.neutral + 1}));
    } else if (e.target.name === 'bad') {
      this.setState(prevState => ({bad: prevState.bad + 1}));
    }
    this.calcPosBlink(e);
  };

  calcPosBlink = e => {
    let maxSize = Math.max(e.target.clientWidth, e.target.clientHeight);
    let coords = e.target.getBoundingClientRect();
    let left = e.clientX - Math.round(coords.left) - maxSize / 2 + 'px';
    let top = e.clientY - Math.round(coords.top) - maxSize / 2 + 'px';
    this.setState({width: maxSize + 'px'});
    this.setState({height: maxSize + 'px'});
    this.setState({
      left: left,
    });
    this.setState({
      top: top,
    });
    console.log(coords);
  };
  countTotalFeedback = () => {
    const {good, neutral, bad} = this.state;
    const total = good + neutral + bad;
    return total;
  };
  countPositiveFeedbackPercentage = () => {
    const {good, neutral, bad} = this.state;
    const posPercent = Math.round((good / (good + neutral + bad)) * 100);
    return posPercent;
  };

  render() {
    let {good, neutral, bad, top, left, width, height} = this.state;
    return (
      <section>
        <h1 className="true">Please leave feedback</h1>
        <div className="true">
          <button
            name="good"
            type="button"
            className="button"
            onClick={this.handleIncrement}

            // onMouseDown={e => {
            //   e.target.classList.add('btnBlink');
            // }}
            // onMouseUp={e => {
            //   e.target.classList.remove('btnBlink');
            // }}
            // onMouseDown={() => this.setState({blinkClass: true})}
            // onMouseUp={() => this.setState({blinkClass: false})}
          >
            Good
            <div
              className="blink"
              style={{top: top, left: left, width: width, height: height}}
            ></div>
          </button>

          <button
            name="neutral"
            type="button"
            className="true"
            onClick={this.handleIncrement}
          >
            Neutral
          </button>

          <button
            name="bad"
            type="button"
            className="true"
            onClick={this.handleIncrement}
          >
            Bad
          </button>
        </div>
        <div className="true">
          <h2 className="true">Statistics</h2>
          <ul>
            <li className="true">Good:{good}</li>
            <li className="true">Neutral:{neutral}</li>
            <li className="true">Bad:{bad}</li>
            <li className="true">Total:{this.countTotalFeedback()}</li>
            <li className="true">
              Positive feedback:{this.countPositiveFeedbackPercentage()}%
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default App;
