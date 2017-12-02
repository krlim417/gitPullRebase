import axios from 'axios';
import spotify from '../Config/spotify'

const pull = (uri, callback) => {
  // console.log('uri in caller', uri.split(':')[2])
  const id = uri.split(':')[2];
  axios
    .get(`https://api.spotify.com/v1/artists/${id}/related-artists`, {
      headers: {
        Authorization: spotify.oAuth,
      },
    })
    .then((responce) => {
      console.log(responce);
      callback(responce);
    })
    .catch((error) => {
      console.log('this is the error ---->', error);
    });
}
export default pull;