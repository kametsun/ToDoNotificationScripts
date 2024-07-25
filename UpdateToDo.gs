const UpdateToDo = (replyToken, taskMessage) => {
  Logger.log(FetchToDoView())
  const taskTitle = taskMessage.slice(5).trim()
  if (!taskTitle) {
    SendLine(replyToken, "タスク名を指定してください。")
    return
  }

  const tasks = FetchToDoView()

  tasks.results.forEach(task => {
    const taskName = task.properties.Title.title[0].text.content

    if (taskName === taskTitle) {
      updateTaskStatus(task.id, "DONE");
      SendLine(replyToken, `【${taskTitle}】のステータスを DONE に変更しました。`)
      return
    }
  })
  SendLine(replyToken, `【${taskTitle}】が見つかりませんでした。`)
}

const updateTaskStatus = (taskId, status) => {
  const url = `https://api.notion.com/v1/pages/${taskId}`
  const payload = JSON.stringify({
    properties: {
      Status: {
        status: {
          name: status
        }
      }
    }
  })

  FetchNotion(url, payload, "PATCH")
}