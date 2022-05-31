const jwt = require('jsonwebtoken');
const jwksClient = require('jwks-rsa');
require('dotenv').config();

const verifyToken = async (token) => {
  const uri = `${process.env.AUTH0_ISSUER}.well-known/jwks.json`;
  console.log(uri);
  const client = jwksClient({
    jwksUri: uri,
  });

  const getJwksClientKey = ( header, callback ) => {
    console.log(header);
    client.getSigningKey(header.kid, (err, key) => {
      console.log(key);
      const signingKey = key?.getPublicKey();
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