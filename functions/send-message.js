exports.handler = async function(event, context) {
    try {
        // Ваша логика
        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*', // Разрешение запросов с любых источников
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'POST'
            },
            body: JSON.stringify({ message: 'Сообщение отправлено!' })
        };
    } catch (error) {
        return {
            statusCode: 500,
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({ error: 'Ошибка при отправке сообщения.' })
        };
    }
};
