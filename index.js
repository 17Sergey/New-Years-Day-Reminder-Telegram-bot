// import TelegramAPI from "node-telegram-bot-api";
// import { getDaysTillNewYearsDay } from "./utils/getDays.js";

// const TOKEN = "7881339413:AAEfzzitcIW8njHSS-3P9Bqiv0CRToLOfS0";

// const bot = new TelegramAPI(TOKEN, { polling: true });

// bot.setMyCommands([
//   { command: "/start", description: "Команда для начала работы" },
//   {
//     command: "/find",
//     description: "Команда чтобы узнать количество дней до Нового года",
//   },
// ]);

// bot.on("message", async (msg) => {
//   const text = msg.text;
//   const chatId = msg.chat.id;
//   console.log(msg);

//   let responseText = "Не знаю такой команды...";
//   if (text === "/start") {
//     await bot.sendSticker(
//       chatId,
//       `https://tlgrm.eu/_/stickers/6a3/497/6a34971d-6648-37c2-8f2b-8940f65ba906/5.jpg`
//     );
//     responseText =
//       "Привет! Я говорю людям, сколько дней осталось до Нового года. Попробуй команду /find";
//   }
//   if (text === "/find") {
//     responseText = `До Нового года ${getDaysTillNewYearsDay()}`;
//   }

//   await bot.sendMessage(chatId, `${responseText}`);
// });

import express from "express";
import dotenv from "dotenv";
import { handler } from "./utils/handler.js";

dotenv.config();

const app = express();

app.use(express.json());

app.post("*", async (req, res) => {
  res.send(await handler(req));
});

app.get("*", async (req, res) => {
  res.send("Hello get");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, function (err) {
  console.log("Server listening on PORT", PORT);
});

// Set web hook and run req in Postman

// "https://api.telegram.org/bot7881339413:AAEfzzitcIW8njHSS-3P9Bqiv0CRToLOfS0/setWebhook?url=https://new-years-day-reminder-telegram-bot.onrender.com/"

/////

// import { getDaysTillNewYearsDay } from "./utils/getDays.js";
// import express from "express";
// import dotenv from "dotenv";
// import { Telegraf } from "telegraf";

// dotenv.config();

// const app = express();

// const bot = new Telegraf(process.env.BOT_TOKEN);

// console.log(bot);

// app.use(express.json());

// bot.start((ctx) => {
//   console.log(ctx);

//   ctx.reply(
//     "Привет! Я твой бот-календарь. Спроси меня, сколько осталось до Нового года."
//   );
// });

// bot.command("newyear", (ctx) => {
//   ctx.reply(`До Нового года ${getDaysTillNewYearsDay()}`);
// });

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

//////

// const MY_TOKEN = "7881339413:AAEfzzitcIW8njHSS-3P9Bqiv0CRToLOfS0";

// const BASE_URL = `https://api.telegram.org/bot${MY_TOKEN}`;

// export const axiosInstance = {
//   get(url, params) {
//     return axios.get(`/${url}`, {
//       baseURL: BASE_URL,
//       params,
//     });
//   },
//   post(url, data) {
//     return axios({
//       method: "post",
//       baseURL: BASE_URL,
//       url: `/${url}`,
//       data,
//     });
//   },
// };

// export const sendMessage = (messageObj, messageText) => {
//   return axiosInstance.get("sendMessage", {
//     chat_id: messageObj.chat_id,
//     text: messageObj.text,
//   });
// };

// export const handleMessage = (messageObj) => {
//   const messageText = messageObj?.text || "";

//   if (messageText.charAt(0) === "/") {
//     const command = messageText.substring(1);
//     switch (command) {
//       case "start":
//         return sendMessage(
//           messageObj,
//           "Привет, я бот, который говорит, сколько дней осталось до нового года. Чтобы использовать, напишите команду /find"
//         );
//         break;
//       case "find":
//         break;

//       default:
//         return sendMessage(messageObj, "К сожалению, не знаю такой команды...");
//         break;
//     }
//   } else {
//     // Send the same message back to the user
//     sendMessage(messageObj, messageText);
//   }
//   return axiosInstance.get("sendMessage", {
//     chat_id: messageObj.chat_id,
//     text: messageObj.text,
//   });
// };

// const handler = async (req, res) => {
//   const { body } = req;

//   if (body) {
//     const messageObj = body.message;
//     await handleMessage(messageObj);
//   }
// };

// app.post("*", async (req, res) => {
//   console.log(req.body);

//   res.send(await handler(req));
// });

// add();

// app.get("*", async (req, res) => {
//   res.send(await handler(req));
// });

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

/*
import axios from "axios";

const MY_TOKEN = "7881339413:AAEfzzitcIW8njHSS-3P9Bqiv0CRToLOfS0";

const BASE_URL = `https://api.telegram.org/bot${MY_TOKEN}`;

export const axiosInstance = {
    get(url, params) {
        return axios.get(`/${url}`, {
            baseURL: BASE_URL,
            params,
        });
    },
    post(url, data) {
        return axios({
            method: "post",
            baseURL: BASE_URL,
            url: `/${url}`,
            data,
        });
    },
};

import { axiosInstance } from "./axiosInstance";

export const sendMessage = (messageObj, messageText) => {
    return axiosInstance.get("sendMessage", {
        chat_id: messageObj.chat_id,
        text: messageObj.text,
    });
};

export const handleMessage = (messageObj) => {
    const messageText = messageObj?.text || "";

    if (messageText.charAt(0) === "/") {
        const command = messageText.substring(1);
        switch (command) {
            case "start":
                return sendMessage(
                    messageObj,
                    "Привет, я бот, который говорит, сколько дней осталось до нового года. Чтобы использовать, напишите команду /find"
                );
                break;
            case "find":
                break;

            default:
                return sendMessage(messageObj, "К сожалению, не знаю такой команды...");
                break;
        }
    } else {
        // Send the same message back to the user
        sendMessage(messageObj, messageText);
    }
    return axiosInstance.get("sendMessage", {
        chat_id: messageObj.chat_id,
        text: messageObj.text,
    });
};

import { handleMessage } from "./Telegram.js";

const handler = async (req, res) => {
    const { body } = req;

    if (body) {
        const messageObj = body.message;
        await handleMessage(messageObj);
    }
};

export default handler;

*/
