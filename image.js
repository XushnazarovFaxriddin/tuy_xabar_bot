const { createCanvas, loadImage } = require('canvas');
const fs = require('fs');

async function addTextToImage(text) {
    const image = await loadImage('temp2.png'); // Rasmning joylashuvi

    // Canvas yaratish
    const canvas = createCanvas(image.width, image.height);
    const context = canvas.getContext('2d');

    // Rasmni canvasga ko'chirish
    context.drawImage(image, 0, 0, image.width, image.height);

    // Montserrat shriftini olish va uni matnga qo'shish
    const font = '48px Montserrat';

    context.font = font;
    context.fillStyle = 'red'; // Matnning rangi
    context.textAlign = 'center'; // Matnning centrda joylashuvi
    context.fillText(text, canvas.width / 2, canvas.height / 3 * 1.87); // Matnni canvasning o'rtasiga joylash

    // Natijani saqlash
    const buffer = canvas.toBuffer('image/png');
    fs.writeFileSync('result.png', buffer);
}

module.exports = addTextToImage;
