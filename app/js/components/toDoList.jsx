import React, { Component } from 'react';

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

  render() {
  	return (
      <div>
        <h1>{this.state.title}</h1>
        <AddItem addNewItem={(item) => this.addItem(item)} />
        <DisplayList list={this.state.list} />
      </div>
    )
  }
}

class AddItem extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      item: ''
    }
  }

  updateItem(evt) {
  	if (evt.key === 'Enter') {
      console.log(evt.target.value);
    	this.props.addNewItem(evt.target.value);
      this.setState({
      	item: ''
      });
      this.refs.listItem.value = '';
    }
  }

  render() {
  	return (
    	<div>
        <p>Add an item and hit enter: </p>
      	<input type="text" ref="listItem" onKeyPress={(e) => this.updateItem(e)} />
      </div>
    );
  }

}

var DisplayList = React.createClass({

  render() {

    let listItems = this.props.list.map(function(item, itemIndex) {
    	return <li key={itemIndex}>{item}</li>
    });

    return (
    	<div>
      	<ol>
        	{listItems}
        </ol>
      </div>
    )
  }

});
