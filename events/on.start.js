onStart = async (client) => {
    const bot = require('../bot.js');

    const chatId = client.chat.id;
    const text = client.text;
    const fromId = client.from.id;
    const username = client.from.username;
    await bot.sendMessage(chatId, "Assalomu alaykum, botimizga xush kelibsiz!\nAdmin: @khushnazarov");
}

const errorHandler = require('./error.handle.js');
module.exports = async (msg) => await errorHandler(msg, onStart);