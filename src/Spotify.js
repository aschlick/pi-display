import React, { Component } from 'react';
import Card from './components/Card';

class Spotify extends Component {
  render(){
    const footer = pug`
      footer.card-footer
        a.card-footer-item Previous
        a.card-footer-item Play
        a.card-footer-item Next
    `;

    return pug`
      Card( title="Spotify" footer=${footer} )
    `;
  }
}

export default Spotify;
