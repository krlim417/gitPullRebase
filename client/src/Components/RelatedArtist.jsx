import React from "react";
import Book from "./Book.jsx";
import BookedModal from "./BookedModal.jsx";
import axios from "axios";
import $ from "jquery";

class RelatedArtist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="artist-container">
        <img
          className="artist-image"
          src={this.props.artist.images[2].url}
          alt="Artist Pic"
        /> 
        <div className="artist-text">
            <div>
              {this.props.artist.name}
            </div> 
            <a href={this.props.artist.uri}>
             <div>Profile</div>
           </a> 
         </div>
      </div>
    );
  }
}
export default RelatedArtist;
