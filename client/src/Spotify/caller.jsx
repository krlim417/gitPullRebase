import axios from "axios";
import spotify from "../Config/spotify"


const pull = (uri) => {

  console.log('uri in caller', uri.split(':')[2])
  const id = uri.split(":")[2];


  axios
    .get(`https://api.spotify.com/v1/artists/${id}/related-artists`, {
      headers: {
        Authorization:
          "Bearer BQCJzaFCC6f2a9Dk5I__eIy60NQM46NNPTMg7S3zvXEKAW6BdXMg0Czx1F3WbJzVSHpmet79oXJG0zqLPxlbBki1GllLewQcr1Fq_SjzbFrML_zlP4jAxfLL-nL8D3mFLSrL4sSgYh9EWW0Z"
      }
    })
    .then(responce => {
      console.log(responce);
    })
    .catch(error => {
      console.log("this is the error ---->", error);
    });
  // axios({
  //   url: `https://api.spotify.com/v1/artists/${id}/related-artists`,
  //   method: "GET",
  //   headers: {Authorization: 'BQDy7FUACG5HSZylofL7BqNNn2NAqWadjoIZAwcsGBbwsbDCLbmMSqAZszWAwhGH9jCqr5MT2xvSYigoMgPilRrSLMcoSzt7LlUcS'},
  // }).then(related => {
    // console.log(related);
    // let currentUser = userObj.data[0].username;
    // axios({
    //   url: "/user",
    //   method: "post",
    //   data: {
    //     artist: artistName,
    //     message: input,
    //     user: currentUser
    //   }
    // }).then(() => {
    //   console.log("succeeded");
    // });
  // });

}

export default pull;