errorHandler = async (msg, func) => {
    const bot = require("../bot.js");
    try {
        return await func(msg);
    } catch (e) {
        try {
            await bot.sendMessage(msg.chat.id, "❗️ Kechirasiz nomalum xatolik yuz berdi iltimos qaytaddan urnab ko'ring yoki qayta /start bosing!");
            throw e;
        } catch (e2) {
            console.error(e2, msg);
            return;
        }
    }
}

module.exports = errorHandler;