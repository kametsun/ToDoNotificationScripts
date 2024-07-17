const AddToDo = (replyToken, taskMessage) => {
  const taskTitle = taskMessage.slice(4).trim()
  if (!taskTitle) SendLine(replyToken, "タスク名を指定してください。")

  let resMessage = `タスク 【${taskTitle}】 を追加しました。\n\n`
  resMessage += "時間が空き次第、タスクの分類分けをしてください。"

  const payload = JSON.stringify({
    parent: { database_id: PropertiesService.getScriptProperties().getProperty("DB_ID") },
    properties: {
      Title: {
        title: [
          {
            text: { content: taskTitle }
          }
        ]
      },
      Status: {
        status: {
          name: "TODO"
        }
      },
      Tag: {
        multi_select: [
          {
            name: "Uncategorized"
          }
        ]
      }
    }
  })

  FetchNotion(null, payload)
  SendLine(replyToken, resMessage)
}
