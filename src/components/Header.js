import React, { Component } from 'react';

class Header extends Component {
  render(){
    return pug`
      h1.title ${this.props.title}
    `;
  }
}

export default Header;
