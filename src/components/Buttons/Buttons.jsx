import React, {Component} from 'react';
import s from './Buttons.module.css';
class FeedbackOptions extends Component {
  state = {
    top: '0px',
    left: '0px',
    width: '0px',
    height: '0px',
  };

  arrRefs = [];

  setRef = node => {
    this.arrRefs.push(node);
  };

  calcPosBlink = (e, i, key) => {
    let maxSize = Math.max(
      this.arrRefs[i].clientWidth,
      this.arrRefs[i].clientHeight,
    );
    let coords = this.arrRefs[i].getBoundingClientRect();
    let left = e.clientX - Math.round(coords.left) - maxSize / 2 + 'px';
    let top = e.clientY - Math.round(coords.top) - maxSize / 2 + 'px';
    this.setState({
      width: maxSize + 'px',
      height: maxSize + 'px',
      left: left,
      top: top,
    });
    this.props.handleIncrement(key);
    console.log(
      left,
      top,
      maxSize,
      coords.left,
      coords.top,
      e.clientY,
      e.clientX,
    );
  };

  render() {
    let {top, left, width, height} = this.state;
    return (
      <div className={s.container}>
        {this.props.stateKeys.map((key, i) => (
          <button
            id={key}
            ref={this.setRef}
            key={key}
            type="button"
            className={s.button}
            onMouseDown={e => this.calcPosBlink(e, i, key)}
            // onMouseDown={() => this.setState({blinkClass: true})}
            // onMouseUp={() => this.setState({blinkClass: false})}
          >
            {key}
            <div
              className={s.blink}
              style={{top: top, left: left, width: width, height: height}}
            ></div>
          </button>
        ))}
      </div>
    );
  }
}
export default FeedbackOptions;
