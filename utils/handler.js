import axios from "axios";

const BASE_URL = `https://api.telegram.org/bot${process.env.BOT_TOKEN}`;

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

export const handler = async (req, res) => {
  const { body } = req;

  if (body) {
    const messageObj = body.message;
    await handleMessage(messageObj);
  }
  return;
};
