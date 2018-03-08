import rp from 'request-promise-native';

const base_url = 'http://localhost:3000'//'https://sandpiper-api-staging.herokuapp.com'

function registerUser(data) {
  return rp.post({
    url: `${base_url}/register`,
    body: data,
    simple: false,
    json: true // automatically parses json response string
  });
}


export { registerUser };