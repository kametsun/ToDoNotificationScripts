const Trigger = () => {
  const URL = "https://api.line.me/v2/bot/message/push";
  const apiKey = `Bearer ${PropertiesService.getScriptProperties().getProperty("LINE_TOKEN")}`;

  let resMessage = "【タスク一覧】 \n\n"

  const toDoList = GetToDoNames().map(name => `・${name}`).join("\n")
  resMessage += toDoList

  const headers = {
    "Authorization": apiKey,
    "Accept": "application/json",
    "Content-type": "application/json"
  };

  const payload = {
    "to": PropertiesService.getScriptProperties().getProperty("USER_ID"),
    "messages": [{
      "type": "text",
      "text": resMessage
    }]
  };

  const options = {
    "method": "post",
    "payload": JSON.stringify(payload),
    "headers": headers
  };

  UrlFetchApp.fetch(URL, options);
}
