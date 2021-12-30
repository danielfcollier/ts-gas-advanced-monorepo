// This function exposes the application as a webapp in the Google Apps Script enviroment

function doGet() {
  // src/client/
  const htmlIndexFile = 'home';
  const htmlPageTemplate = HtmlService.createTemplateFromFile(htmlIndexFile);

  return htmlPageTemplate.evaluate().setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

export default doGet;
