import React, {Component} from 'react';

import './App.css';
import FeedbackOptions from './components/Buttons/Buttons';
import Statistics from './components/Statistics/Statistics';
import Section from './components/Section/Section';
import Notify from './components/Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleIncrement = stateKey => {
    this.setState(prevState => ({
      [stateKey]: prevState[stateKey] + 1,
    }));
  };

  render() {
    return (
      <Section>
        <FeedbackOptions
          stateKeys={Object.keys(this.state)}
          handleIncrement={this.handleIncrement}
        ></FeedbackOptions>
        <Statistics state={this.state}>
          <Notify message={'O my God, urgently click!'}></Notify>
        </Statistics>
      </Section>
    );
  }
}

export default App;
