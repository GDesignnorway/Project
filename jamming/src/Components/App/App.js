import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      playlistName: 'New Playlist',
      playlistTracks: [name: "", artist: "", album: ""]
    }
  }
  addTrack(track) {
      let foundTrack = playlistTracks.find(currentTrack => currentTrack.id === track.id);
      if (foundTrack === undefined) {
        tracks.push(track);
        this.setState({ playlistTracks: tracks });
      }
    }

    removeTrack(track) {
      let removeTrack = playlistTracks.find(currentTrack => currentTrack.id === track.id);
      if(removeTrack === track.id) {
        tracks.splice(track);
        this.setState({ playlistTracks: tracks});
      }
    }
  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
           <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>
             <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks}/>
          </div>
        </div>
      </div>
    );
  }
}



export default App;