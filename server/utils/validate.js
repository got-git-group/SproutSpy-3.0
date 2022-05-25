// Modules do not support es style imports. We may need to try to figure a way to clean these up later.

require('dotenv').config();
const jwt = require('jsonwebtoken');
const jwksClient = require('jwks-rsa');

const client = jwksClient({
    jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`
});

const getKey = (header, callback) => {
    client.getSigningKey(header.kid, (err, key) => {
      const signingKey = key.getPublicKey();
      callback(null, signingKey);
    });
};

const isTokenValid = async (token) => {
  if (token) {
    const bearerToken = token.split(' ');
    const result = new Promise((resolve, reject) => {
      jwt.verify(bearerToken[1], getKey, {
        algorithms: ['RS256'],
        issuer: `https://${process.env.AUTH0_DOMAIN}/`,
        audience: process.env.AUTH0_AUDIENCE
      }, (err, decoded) => {
        if (err) {
          resolve({ err });
        }

        if ( decoded ) {
          resolve({ decoded });
        }
      }
      );
    });
  }
  return ({ err: 'No token' });
};

module.exports = isTokenValid;
