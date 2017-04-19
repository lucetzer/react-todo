import React, { Component } from 'react';
import AddItem from './addItem.jsx';
import DisplayList from './displayList.jsx';


export default class ToDoList extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      title: 'To Do List',
      list: [],
    };
  }

  addItem(item) {
    this.state.list.push(item);
    this.setState({
      list: this.state.list,
    });
  };

  clearList(evt) {
    this.setState({
      list: [],
    });
  };

  render() {
  	return (
      <div>
        <h1 className="title">{this.state.title}</h1>
        <AddItem addNewItem={(item) => this.addItem(item)} />
        <DisplayList list={this.state.list} />
        <button onClick={(e) => this.clearList(e)}>Clear list</button>
      </div>
    )
  }
}
