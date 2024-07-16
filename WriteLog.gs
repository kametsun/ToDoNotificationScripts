const WriteLog = (json) => {
  const replyToken = json.events[0].replyToken;
  const messageId = json.events[0].message.id;
  const messageType = json.events[0].message.type;
  const messageText = json.events[0].message.text;
  const userId = json.events[0].source.userId;

  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("POST_LOG");

  sheet.appendRow(["'=== START ==="]);
  sheet.appendRow(['message_id', messageId]);
  sheet.appendRow(['message_type', messageType]);
  sheet.appendRow(['message_text', messageText]);
  sheet.appendRow(['user_id', userId]);
  sheet.appendRow(['reply_token', replyToken])
  sheet.appendRow(["'=== END ==="]);
}