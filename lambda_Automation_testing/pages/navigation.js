const { expect } = require("@playwright/test");

exports.Navigation = class Navigation {
  constructor(page) {
    this.page = page;
    this.commanLink = (linkText) =>
      page.getByRole("link", { name: `${linkText}`, exact: true });
    this.subLink = (hasText) => page.locator(`h3:has-text('${hasText}')`);
    this .headings = (headingText) => page.locator(`h1:has-text('${headingText}')`);
  }

  async ohoverLink(linkText) {
    await this.page.waitForTimeout(4000);
     await this.commanLink(linkText).hover();
  }
  async clickLink(hasText){
    await this.page.waitForTimeout(4000);
     await this.subLink(hasText).click();
  }


};
