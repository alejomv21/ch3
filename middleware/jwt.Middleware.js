var jwt = require('express-jwt');
var jwks = require('jwks-rsa');



var jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: 'https://dev-acnqpn-e.us.auth0.com/.well-known/jwks.json'
  }),
  audience: 'api-gasaw-group',
  issuer: 'https://dev-acnqpn-e.us.auth0.com/',
  algorithms: ['RS256']
});

module.exports = jwtCheck;