/**
 * メッセージを受信した際に実行される
 */
const doPost = (e) => {
  const json = JSON.parse(e.postData.contents)
  const messageText = json.events[0].message.text
  const replyToken = json.events[0].replyToken

  if (messageText === "タスク一覧") {
    Trigger()
  } else if (messageText.startsWith("add ")) {
    AddToDo(replyToken, messageText)
  }

  WriteLog(json)
}
