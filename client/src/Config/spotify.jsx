import axios from 'axios';

let spotify = {
  oAuth:
    "Bearer BQCSgJ7thWnPWzYN_7GGJ3HH2SSMythTfk9Xjx9zqImoDrCc83uGdglsrRLMP0PRugv4nTZQ0nOaGUo5ZlSDfVyV0z2ky7KRWUQaJ1QlzYFwQvfxa9Gm92h3HFe7aqTzt29Qnj0m5GhDBQ"
}; 

// axios
//   .get('https://accounts.spotify.com/api/token', {
//     headers: {
//       Authorization:
//         `Basic <base64 encoded ${spotify.clientId}:${spotify.clientSecret}>`,
//     },
//     grant_type: 'client_credentials',
//   })
//   .then(responce => {
//     console.log(responce);
//     console.log(spotify);
//   })
//   .catch(error => {
//     console.log(',this is the error ---->', error);
//   });


export default spotify = spotify;