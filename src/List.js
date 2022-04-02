import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

import './List.css';

class List extends React.Component {
  constructor() {
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
      tempArr.push({checked: false, item: this.state.newListInput});
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
          <div>
            <Checkbox />
            {item.item}
            <IconButton onClick={() => this.removeItem(index)}>
              <DeleteIcon />
            </IconButton>
          </div>
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
