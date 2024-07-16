/**
 * LINEに送信する
 */
const SendLine = (replyToken, message) => {
  const URL = 'https://api.line.me/v2/bot/message/reply';
  let apiKey = `Bearer ${PropertiesService.getScriptProperties().getProperty("LINE_TOKEN")}`;

  let option = {
    'headers': {
      'Content-Type': 'application/json; charset=UTF-8',
      'Authorization': apiKey,
    },
    'method': 'post',
    'payload': JSON.stringify({
      'replyToken': replyToken,
      'messages': [{
        'type': 'text',
        'text': message,
      }],
    }),
  }
  UrlFetchApp.fetch(URL, option);
}