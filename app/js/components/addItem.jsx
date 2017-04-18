import React, { Component } from 'react';

export default class AddItem extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      item: ''
    }
  }

  updateItem(evt) {
  	if (evt.key === 'Enter' && evt.target.value !== '') {
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
    )
  }

}
