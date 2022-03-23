import React from 'react';
import ListItem from './ListItem';

import './List.css';

class List extends React.Component {
  constructor(props) {
    super();
    console.log(props);
    this.state = { arr: [], newListInput: '' };
    this.onClick = this.onClick.bind(this);
    this.getBall = this.getBall.bind(this);
  }

  onClick() {
    console.log('CLICK!!!');
    console.log(this.state.newListInput);
    var tempArr = this.state.arr;
    tempArr.push(this.state.newListInput);
    this.setState({ arr: tempArr, newListInput: '' });
    console.log(this.state.arr);
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
        <div className='input-container'>
          <input
            onChange={this.getBall}
            value={this.state.newListInput}
            placeholder="Add a todo"
          ></input>
          <button className='input-button' onClick={this.onClick}>+</button>
        </div>
      </div>
    );
  }
}

export default List;
