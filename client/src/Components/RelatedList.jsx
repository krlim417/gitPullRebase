import React from 'react';
import { connect } from 'react-redux';  
import Navbar from './Navbar.jsx'
import axios from 'axios';
import RelatedArtist from "./RelatedArtist.jsx";

const RelatedList = ( { artists } ) => {
    return <div className="artistList">
        <h3>Related Artists List</h3>
        <br/>
          {artists.map(function(artist, index) {
            return (
            <div key={index}>
                <RelatedArtist artist={artist} />
              </div>
            )
          })}
      </div>;
}

const mapStateToProps = ( { artists } ) => ({
  artists
})

export default connect(mapStateToProps)(RelatedList);