const AddToDo = (taskMessage) => {
  const payload = JSON.stringify({
    parent: { database_id: PropertiesService.getScriptProperties().getProperty("DB_ID") },
    properties: {
      Title: {
        title: [
          {
            text: { content: taskMessage }
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

  FetchPage(payload)
}