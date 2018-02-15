import SpotifyConfig from 'SpotifyConfig'

class SpotifyHelper {
  init(){
    this.getAccessToken().then()
  }

  currentlyPlaying(){
    if(!this.accessToken){
      this.getAccessToken();
    }
  }

  getAccessToken(){
    return fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      body: 'grant_type=client_credentials',
      headers: {
        'Authorization': '' + btoa(SpotifyConfig.user + ':' + SpotifyConfig.password)
      }
    })
  }
}

export default new SpotifyHelper();
