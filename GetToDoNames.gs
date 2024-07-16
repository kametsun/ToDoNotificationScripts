const GetToDoNames = () => {
  return FetchToDoView().results.map(page => {
    return page.properties.Title.title.map(title => title.plain_text).join("");
  });
}