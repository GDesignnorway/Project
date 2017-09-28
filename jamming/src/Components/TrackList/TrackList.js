import React from 'react';
import './TrackList.css';
import Track from '../Track/Track';

class TrackList extends React.Component {
	render() {
		return (
			<div className="TrackList">
			    <ul>
			    	<li>Test</li>
			    	<li>Test 2</li>
			    	<li>Test 3</li>
			    </ul>
			</div>
		);
	}
}


export default TrackList;