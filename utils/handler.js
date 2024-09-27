import axios from "axios";
import { getDaysTillNewYearsDay } from "./getDays.js";

const BASE_URL = `https://api.telegram.org/bot${
  process.env.BOT_TOKEN || "7486627229:AAEV9U_Mp2Jh3aP_NVcGxSXC4qEsohVuddg"
}`;

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

export const sendMessage = (messageObj, messageText) => {
  try {
    return axiosInstance.get("sendMessage", {
      chat_id: messageObj.chat.id,
      text: messageText,
    });
  } catch (error) {
    console.error(error.message);
  }
};

export const handleMessage = (messageObj) => {
  const messageText = messageObj?.text || "";
  switch (messageText) {
    case "/start":
      return sendMessage(
        messageObj,
        "Привет, я бот, который говорит, сколько дней осталось до нового года. Чтобы использовать, напишите команду /find"
      );
      break;
    case "/find":
      return sendMessage(
        messageObj,
        `До Нового года ${getDaysTillNewYearsDay()}`
      );
      break;

    default:
      return sendMessage(messageObj, "К сожалению, не знаю такой команды...");
      break;
  }
};

export const handler = async (req, res) => {
  const messageObj = req.body.message;
  await handleMessage(messageObj);
  return;
};
