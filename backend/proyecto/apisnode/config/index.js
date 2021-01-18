const dotenv = require("dotenv");
dotenv.config();
module.exports = {
    SECRET:process.env.APP_SECRET,
    DB:process.env.APP_DB
};