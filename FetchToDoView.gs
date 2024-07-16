const FetchToDoView = () => {
  const URL = `https://api.notion.com/v1/databases/${PropertiesService.getScriptProperties().getProperty("DB_ID")}/query`
  const headers = {
    "Notion-Version": "2022-06-28",
    "Content-Type": "application/json",
    "Authorization": `Bearer ${PropertiesService.getScriptProperties().getProperty("INTERNAL_INTEGRATION_SECRET")}`
  }

  const raw = JSON.stringify({
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

  const options = {
    method: "POST",
    headers: headers,
    payload: raw,
    redirect: "follow"
  };

  const res = UrlFetchApp.fetch(URL, options).getContentText()

  return JSON.parse(res)
}
