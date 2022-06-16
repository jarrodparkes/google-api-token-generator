const { google } = require('googleapis');
const settings = require('./settings.json');

// Generate access token.
function getAccessToken() {
  return new Promise(function (resolve, reject) {
    const key = require('./service-account.json');
    const jwtClient = new google.auth.JWT(
      key.client_email,
      null,
      key.private_key,
      settings.scopes,
      null
    );
    jwtClient.authorize(function (err, tokens) {
      if (err) {
        reject(err);
        return;
      }
      console.log(tokens.access_token);
      resolve(tokens.access_token);
    });
  });
}

// Do it!
getAccessToken();