
export function getArtists() {
  const artists = ['taylor swift', 'marshmellowwwww'];
  // need to use dispatch for async functions
  return setArtists(artists);
}

export function setArtists(artists) {
  console.log('setArtists being called', artists);
  return {
    type: "SET_ARTISTS",
    artists,
  };
}