import React from 'react';
import ListItem from './ListItem';

import './List.css';

class List extends React.Component {
  constructor(props) {
    super();
    this.state = {
      arr: JSON.parse(localStorage.getItem('currentItems')) || [],
      newListInput: '',
    };
    this.onClick = this.onClick.bind(this);
    this.getBall = this.getBall.bind(this);
    this.removeItem = this.removeItem.bind(this);
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
      localStorage.setItem('currentItems', JSON.stringify(this.state.arr));
    }
  }

  getBall(e) {
    this.setState({ newListInput: e.target.value });
  }

  removeItem(index) {
    var tempArr = this.state.arr;
    tempArr.splice(index, 1);
    this.setState({ arr: tempArr });
    localStorage.setItem('currentItems', JSON.stringify(this.state.arr));
  }

  render() {
    return (
      <div>
        {this.state.arr.map((item, index) => (
          <ListItem
            key={index}
            index={index}
            item={item}
            removeItem={this.removeItem}
          ></ListItem>
        ))}
        <div className="input-container">
          <input
            onChange={this.getBall}
            value={this.state.newListInput}
            placeholder="Add a todo"
          />
          <button className="input-button" onClick={this.onClick}>
            +
          </button>
        </div>
      </div>
    );
  }
}

export default List;
