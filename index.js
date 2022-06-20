#!/usr/bin/env node

const { google } = require('googleapis');

// Get args.
const args = process.argv.slice(2);

// Get paths.
const tempDirectory = args[0];
const settingsPath = `${tempDirectory}/settings.json`;
const serviceAccountPath = `${tempDirectory}/service-account.json`;

// Get settings.
const settings = require(settingsPath);

// Generate access token.
function getAccessToken() {
  return new Promise(function (resolve, reject) {
    const key = require(serviceAccountPath);
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