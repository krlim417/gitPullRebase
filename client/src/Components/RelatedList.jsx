import React from 'react';
import { connect } from 'react-redux';  
import Navbar from './Navbar.jsx'
import axios from 'axios';
import RelatedArtist from "./RelatedArtist.jsx";

const RelatedList = ( { artists } ) => {
    return (
      <div>
        <h5>Related Artists List</h5>
          <ul>
            {artists.map(function(artist, index) {
              return (
                <li key={index}>
                  <RelatedArtist 
                   artist={artist}
                  />
                </li>
              )
            })}
          </ul>
      </div>
    );
}

const mapStateToProps = ( { artists } ) => ({
  artists
})

export default connect(mapStateToProps)(RelatedList);