const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = '7111396365:AAHEAK8wuAyzZplr5PZNmOL5O3dDG7CmbRo';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"


  bot.sendMessage(chatId, resp);
  bot.sendMessage(msg.chat.id, "Welcome");
});


bot.on('photo', async (msg) => {
    const chatId = msg.chat.id;
    const lastPhotoId = msg.photo[msg.photo.length - 1].file_id;

    const photo = await bot.downloadFile(lastPhotoId, './src/img');
    const photoURL = await bot.getFileLink(lastPhotoId);

    bot.sendPhoto(chatId, photo, {caption: photoURL});
});

bot.on('document', async (msg) => {
    const chatId = msg.chat.chatId
    const fileId = msg.document.file_id;
    const document = await bot.downloadFile(fileId, "./src/img");

    bot.sendPhoto(chat.Id, document);
  
});


