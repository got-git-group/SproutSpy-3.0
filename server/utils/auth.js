const jwt = require('jsonwebtoken');
const jwksClient = require('jwks-rsa');
require('dotenv').config();

const verifyToken = async (token) => {
  const client = jwksClient({
    jwksUri: `${process.env.AUTH0_ISSUER}.well-known/jwks.json`
  });

  const getJwksClientKey = ( header, callback ) => {
    client.getSigningKey(header.kid, (err, key) => {
      const signingKey = key.getPublicKey();
      callback(null, signingKey);
    });
  }

  return new Promise((resolve, reject) => {
    console.log(token);
    jwt.verify(
      token,
      getJwksClientKey,
      {
        audience: process.env.AUTH0_AUDIENCE,
        issuer: process.env.AUTH0_ISSUER,
        algorithms: ['RS256']
      },
      (err, decoded) => {
        if (err) {
          reject(err);
        } else {
          resolve(decoded);
        }
      }
    )
  })
}

module.exports = verifyToken;