import React, { Component } from 'react';
import {
  Route,
  Link
} from 'react-router-dom';
import './App.sass';
import Dashboard from './Dashboard';
import Spotify from './Spotify';

class App extends Component {
  render() {
    return pug`
      nav.is-fixed-top.navbar.is-light(
        role="navigation"
        aria-label="main navigation"
      )
        .container
          .navbar-menu
            .navbar-start
              Link( id="NavLinkHome" to="/" className="navbar-item" ) Home
              Link( id="NavLinkSpotify" to="/spotify" className="navbar-item" ) Spotify
              Link( id="NavLinkPlex" to="/plex" className="navbar-item" ) Plex
              Link( id="NavLinkServer" to="/server" className="navbar-item" ) SchlickServer
      .container
        section.section
          Route( id="NavRouteHome" exact=true path="/" component=${Dashboard} )
          Route( id="NavRouteSpotify" path="/spotify" component=${Spotify} )
    `;
  }
}

export default App;
