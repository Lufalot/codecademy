import React, { Component } from "react";
import Track from "../Track/Track";

import "./TrackList.css";

export default class TrackList extends Component {
  render() {
    console.log(this.props.tracks);

    return (
      <div className="TrackList">
        {this.props.tracks.map((track) => (
          <Track
            key={track.id}
            track={track}
            onAdd={this.props.onAdd}
            onRemove={this.props.onRemove}
            isRemoval={this.props.isRemoval}
          />
        ))}
      </div>
    );
  }
}
