import React from 'react';
import './TrackList.css';
import Track from '../Track/Track';

class TrackList extends React.Component {
	render() {
		return (

			<div className="TrackList" key={track.id}>
			    this.props.tracks.map(track => {
			    	<Track onAdd={this.props.onAdd},
			    	{this.props.track.name},
			    	{this.props.track.artist},
			    	{this.props.track.album}
			    	 onRemove={this.props.onRemove}/>
			    });
			</div>
		);
	}
}


export default TrackList;