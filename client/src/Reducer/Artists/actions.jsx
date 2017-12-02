export function getArtists() {
  const artists = ['taylor swift', 'marshmellowwwww'];
  return setArtists(artists);
}
export function setArtists(artists) {
  return {
    type: "SET_ARTISTS",
    artists,
  };
}