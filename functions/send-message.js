const axios = require('axios');

exports.handler = async function (event, context) {
  const { text1, text2, check_state } = JSON.parse(event.body);
  const token = 'В7182997455:AAE3x3tfHXi3hi3oLK4xCcUDaoCThUY2Cac';
  const chatId = '1025323599';

  try {
    const response = await axios.post(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        chat_id: chatId,
        text: `Text1: ${text1}\nText2: ${text2}\nCheckbox: ${check_state}`,
      }
    );
    return {
      statusCode: 200,
      body: 'Сообщение отправлено!',
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: 'Ошибка при отправке сообщения.',
    };
  }
};
