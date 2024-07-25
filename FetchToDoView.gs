const FetchToDoView = () => {
  const url = `https://api.notion.com/v1/databases/${PropertiesService.getScriptProperties().getProperty("DB_ID")}/query`

  const payload = JSON.stringify({
    filter: {
      and: [
        {
          property: "Tag",
          multi_select: {
            does_not_contain: "Wish"
          }
        },
        {
          property: "Tag",
          multi_select: {
            does_not_contain: "Idea"
          }
        },
        {
          or: [
            {
              property: "Status",
              status: {
                equals: "TODO"
              }
            },
            {
              property: "Status",
              status: {
                equals: "DOING"
              }
            }
          ]
        }
      ]
    }
  });


  return JSON.parse(FetchNotion(url, payload, null).getContentText())
}
