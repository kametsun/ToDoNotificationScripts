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
    const taskTitle = messageText.slice(4).trim()
    if (taskTitle) {
      AddToDo(taskTitle)
      SendLine(replyToken, `タスク${taskTitle}を追加しました。`)
    } else {
      SendLine(replyToken, `タスク名を指定してください。`)
    }
  }

  WriteLog(json)
}
