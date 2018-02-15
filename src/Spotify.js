import React, { Component } from 'react';
import Card from './components/Card';
import Header from './components/Header';
import SpotifyHelper from './helpers/spotify';

class Spotify extends Component {
  init(){
    this.set('currentlyPlaying', SpotifyHelper.currentlyPlaying())
    this.isPlaying = false;
  }

  playPauseIcon(){
    if(this.isPlaying){
      return pug`
        i.fas.fa-pause
      `;
    } else{
      return pug`
        i.fas.fa-play
      `;
    }
  }

  render(){
    const footer = pug`
      footer.card-footer
        a.card-footer-item
          i.fas.fa-step-backward
        a.card-footer-item

          i.fas.fa-play
        a.card-footer-item
          i.fas.fa-step-forward
    `;

    return pug`
      Header( title="Spotify" )
      Card( title="Now Playing" footer=${footer} )
    `;
  }
}

export default Spotify;
