const Trigger = () => {
  const url = "https://api.line.me/v2/bot/message/push";
  const apiKey = `Bearer ${PropertiesService.getScriptProperties().getProperty("LINE_TOKEN")}`;

  const toDoList = GetToDoNames().map(name => `・${name}`).join("\n")

  const headers = {
    "Authorization": apiKey,
    "Accept": "application/json",
    "Content-type": "application/json"
  };

  const payload = {
    "to": PropertiesService.getScriptProperties().getProperty("USER_ID"),
    "messages": [{
      "type": "text",
      "text": toDoList
    }]
  };

  const options = {
    "method": "post",
    "payload": JSON.stringify(payload),
    "headers": headers
  };

  UrlFetchApp.fetch(url, options);
}