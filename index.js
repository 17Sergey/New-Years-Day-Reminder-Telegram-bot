import TelegramAPI from "node-telegram-bot-api";
import { getDaysTillNewYearsDay } from "./utils/getDays.js";

const TOKEN = "7881339413:AAEfzzitcIW8njHSS-3P9Bqiv0CRToLOfS0";

const bot = new TelegramAPI(TOKEN, { polling: true });

bot.setMyCommands([
  { command: "/start", description: "Команда для начала работы" },
  {
    command: "/find",
    description: "Команда чтобы узнать количество дней до Нового года",
  },
]);

bot.on("message", async (msg) => {
  const text = msg.text;
  const chatId = msg.chat.id;
  console.log(msg);

  let responseText = "Не знаю такой команды...";
  if (text === "/start") {
    await bot.sendSticker(
      chatId,
      `https://tlgrm.eu/_/stickers/6a3/497/6a34971d-6648-37c2-8f2b-8940f65ba906/5.jpg`
    );
    responseText =
      "Привет! Я говорю людям, сколько дней осталось до Нового года. Попробуй команду /find";
  }
  if (text === "/find") {
    responseText = `До Нового года ${getDaysTillNewYearsDay()}`;
  }

  await bot.sendMessage(chatId, `${responseText}`);
});
