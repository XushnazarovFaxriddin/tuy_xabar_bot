const ffmpeg = require('fluent-ffmpeg');
const path = require('path');

const videoInputPath = 'temp2.mp4';  // Sizning videoningizning manzili
const videoOutputPath = 'result.mp4';  // Chiqish videoning manzili
const textToAdd = 'Sevinchbek Mansurov';
const fontSize = 60;
const fontColor = 'red'; 
const pathToFfmpeg = path.join(__dirname, 'ffmpeg.exe'); // ffmpeg manzili

if (!videoInputPath) {
  console.error('Xato: Video fayl manzili bo\'sh bo\'lishi mumkin emas.');
  process.exit(1);
}

function addTextToVideo(textToAdd) {
  const command = ffmpeg();

  // Video faylini o'qib olamiz
  command.input(videoInputPath);

  // Textni videoning o'rtasiga qo'shamiz
  command.videoFilter(`drawtext=text='${textToAdd}':fontsize=${fontSize}:fontcolor=${fontColor}:x=(w-text_w)/2:y=(h-text_h)/7.9`);

  // Chiqish faylini belgilaymiz
  command.output(videoOutputPath);

  // Ishni boshlaymiz
  command
    .setFfmpegPath(pathToFfmpeg)
    // .setFfmpegPath(ffmpegStatic.path)
    .on('end', function () {
      console.log('Tugallandi');
    })
    .on('error', function (err) {
      console.error('Xato:', err);
    })
    .run();
}

module.exports = addTextToVideo;