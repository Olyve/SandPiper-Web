import rp from 'request-promise-native';

const base_url = 'http://staging-api.sandpiper.ninja';

function registerUser(data) {
  return rp.post({
    url: `${base_url}/register`,
    body: data,
    simple: false,
    json: true // automatically parses json response string
  });
}

function loginUser(data) {
  return rp.post({
    url: `${base_url}/login`,
    body: data,
    simple: false,
    json: true
  });
}


export { registerUser, loginUser };