require('dotenv').config();
const jwt = require('jsonwebtoken');
const jwksClient = require('jwks-rsa');

const wellKnown = `${process.env.AUTH0_ISSUER}.well-known/jwks.json`;
console.log(wellKnown);


const client = jwksClient({
  jwksUri: wellKnown
});

const getKey = (header, callback) => {
  console.log('Header: ',header);
  client.getSigningKey(header.kid, (error, key) => {
    console.log('Error: ',error);
    console.log("key", key);
    const signingKey = key.publicKey || key.rsaPublicKey;
    callback(null, signingKey);
  });
}

const isTokenValid = async (token) => {
  if (token) {
    const bearerToken = token.split(" ");
    console.log(bearerToken[1]);

    const result = new Promise((resolve, reject) => {
      jwt.verify(
        bearerToken[1],
        getKey,
        {
          audience: process.env.AUTH0_AUDIENCE,
          issuer: process.env.AUTH0_ISSUER,
          algorithms: ['RS256']
        },
        (error, decoded) => {
          if (error) {
            resolve({ error});
          }
          if (decoded) {
            console.log(decoded);
            resolve({ decoded });
          }
        }
      )
    })
    return result;
  }
  return { error: 'No token provided' };
}

module.exports = isTokenValid;