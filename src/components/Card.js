import React, { Component } from 'react';

class Card extends Component {
  constructor(props){
    super(props);
    this.title = props.title;
  }

  header(){
    return pug`
      header.card-header
        p.card-header-title ${this.title}
    `;
  }

  image(){
    return pug`
      .card-image
    `
  }

  body(){
    return pug`
      .card-content
    `;
  }

  footer(){
    if(this.props.footer)
      return this.props.footer;

    return;
  }

  render(){
    return pug`
      .card
        ${this.header()}
        ${this.image()}
        ${this.body()}
        ${this.footer()}
    `;
  }
}

export default Card;
