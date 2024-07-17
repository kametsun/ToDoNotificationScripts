const AddToDo = (replyToken, taskMessage) => {
  const taskTitle = taskMessage.slice(4).trim()
  if (!taskTitle) SendLine(replyToken, "タスク名を指定してください。")

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

  FetchNotion(null,payload)
  SendLine(replyToken, `タスク${taskTitle}を追加しました。`)
}
