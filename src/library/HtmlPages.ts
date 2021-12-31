export default class HtmlPages {
  private static buildHtml(filename) {
    const template = HtmlService.createTemplateFromFile(filename);
    const html = template.evaluate();

    return html;
  }

  static buildWebApp(filename) {
    const html = this.buildHtml(filename);

    return html.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
  }
}
