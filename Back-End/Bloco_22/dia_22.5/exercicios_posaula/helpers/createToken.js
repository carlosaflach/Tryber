const gerenateRandomToken = require('crypto').randomBytes(6).toString('hex');

console.log(gerenateRandomToken);
module.exports = gerenateRandomToken;