import React, { Component } from 'react';

class Card extends Component {
  constructor(props){
    super(props);
    this.title = props.title;
  }

  header(){
    return pug`
      header.card-header
        p.card-header-title
    `;
  }

  footer(){
    if(this.props.footer)
      return this.props.footer;

    return pug`
    `;
  }

  render(){
    return pug`
      .card

    `;
  }
}

export default Card;
