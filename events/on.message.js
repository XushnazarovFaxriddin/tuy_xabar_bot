const config = require('../config.json').bot;
const fs = require('fs');
const image = require('./../image.js');
const video = require('./../video.js');
onMessage = async (msg) => {
    if (msg.text === '/start') return;

    const bot = require('../bot.js');
    const chatId = msg.chat.id;
    const fromId = msg.from.id;
    if (!config.admins.includes(fromId)) {
        return await bot.sendMessage(chatId, "Sizga ushbu botdan foydlanishga ruxsat yoq!");
    }
    bot.sendMessage(chatId, "Rasm tayyorlanmoqda!");
    const text = msg.text;
    video(text);
    await image(text);
    await bot.sendPhoto(chatId, fs.readFileSync('result.png'));
    await bot.sendMessage(chatId, "Video tayyorlanmoqda, kuting!");
    await sleep(2500);
    await bot.sendVideo(chatId, fs.readFileSync('result.mp4'));
}

function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

const errorHandler = require('./error.handle.js');
module.exports = async (msg) => await errorHandler(msg, onMessage);