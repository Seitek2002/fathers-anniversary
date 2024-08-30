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
        text: JSON.stringify(`Text1: ${text1}\nText2: ${text2}\nCheckbox: ${check_state}`),
      }
    );
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*', // Разрешение запросов с любых источников
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST',
      },
      body: 'Сообщение отправлено!',
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: 'Ошибка при отправке сообщения.',
    };
  }
};
