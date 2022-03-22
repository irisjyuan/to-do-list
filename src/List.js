import React from 'react';
import ListItem from './ListItem';

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
        <input onChange={this.getBall} value={this.state.newListInput}></input>
        <button onClick={this.onClick}>+</button>
      </div>
    );
  }
}

export default List;
