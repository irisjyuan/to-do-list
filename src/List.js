import React from 'react';
import ListItem from './ListItem';

import './List.css';

class List extends React.Component {
  constructor(props) {
    super();
    this.state = { arr: [], newListInput: '' };
    this.onClick = this.onClick.bind(this);
    this.getBall = this.getBall.bind(this);
  }

  onClick() {
    if (!this.state.newListInput) {
      alert(
        'you have to enter something in the input box to add it to the to do list'
      );
    } else {
      var tempArr = this.state.arr;
      tempArr.push(this.state.newListInput);
      this.setState({ arr: tempArr, newListInput: '' });
    }
  }

  getBall(e) {
    this.setState({ newListInput: e.target.value });
  }

  render() {
    return (
      <div>
        {this.state.arr.map((item, index) => (
          <ListItem key={index} item={item}></ListItem>
        ))}
        <div className="input-container">
          <input
            onChange={this.getBall}
            value={this.state.newListInput}
            placeholder="Add a todo"
          ></input>
          <button className="input-button" onClick={this.onClick}>
            +
          </button>
        </div>
      </div>
    );
  }
}

export default List;
