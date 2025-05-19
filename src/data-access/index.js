const pool = require('../config/db');
const makeUserData = require("./user-data");

const userDb = makeUserData({pool});

module.exports = userDb;