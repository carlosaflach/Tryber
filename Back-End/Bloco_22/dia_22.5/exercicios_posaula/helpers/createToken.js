const gerenateRandomToken = require('crypto').randomBytes(6).toString('hex');

module.exports = gerenateRandomToken;