/**
 * メッセージを受信した際に実行される
 */
const doPost = (e) => {
  const json = JSON.parse(e.postData.contents)

  WriteLog(json)

  if(json.events[0].message.text === "タスク一覧"){
    Trigger()
  }
}