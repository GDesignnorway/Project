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
    removeTrack = removeTrack.bind(this);
    updatePlaylistName = updatePlaylistName.bind(this);
  }
  addTrack(track) {
      let foundTrack = this.playlistTracks.find(currentTrack => currentTrack.id === track.id);
      if (foundTrack === undefined) {
        tracks.push(track);
        this.setState({ playlistTracks: tracks });
      }
    }

    removeTrack(track) {
      let foundTrack = this.playlistTracks.find(currentTrack => currentTrack.id === track.id);
      if(foundTrack) {
        playlistTracks.splice(playlistTracks.indexOf(foundTrack))
      }       
      this.setState({ playlistTracks: tracks });
    }

    updatePlaylistName(name) {
      setState(input);
    }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
           <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>
             <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onNameChange={updatePlaylistName} onRemove={this.removeTrack}/>
          </div>
        </div>
      </div>
    );
  }
}



export default App;