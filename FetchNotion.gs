const FetchNotion = (url, payload) => {
  const targetUrl = url ? url : "https://api.notion.com/v1/pages"
  const headers = {
    "Notion-Version": "2022-06-28",
    "Content-Type": "application/json",
    "Authorization": `Bearer ${PropertiesService.getScriptProperties().getProperty("INTERNAL_INTEGRATION_SECRET")}`
  }

  const options = {
    method: "POST",
    headers: headers,
    payload: payload,
    redirect: "follow"
  };

  return UrlFetchApp.fetch(targetUrl, options);
}
