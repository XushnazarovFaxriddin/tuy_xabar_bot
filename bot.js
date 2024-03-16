const TelegramBot = require('node-telegram-bot-api');
const config = require("./config.json").bot;

// TOKEN && ULANISH 
const token = config.token;
const bot = new TelegramBot(token, { polling: true });

// on start
bot.onText(/\/start/, require("./events/on.start.js"));

//on message
bot.on("message", require("./events/on.message.js"));

//on callback_query
bot.on("polling_error", (err) => {
    console.log("TGB: ./app/bot.js.. 25 rows");
});

// exports bot 
module.exports = bot