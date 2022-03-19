import React from 'react';

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
  }
  getBall(e) {
    this.setState({ newListInput: e.target.value });
  }
  render() {
    return (
      <div>
        <input onChange={this.getBall}></input>
        <button onClick={this.onClick}>+</button>
      </div>
    );
  }
}

export default List;
