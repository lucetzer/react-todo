import React, { Component } from 'react';

export default class DisplayList extends Component {

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

};
