
exports.HomePage = class HomePage {
    constructor(page) {
      this.page = page;
      this.logo = page.locator('a[href="https://www.lambdatest.com/"]');
    }
  };



//   {
//     "name":"Online Browser Testing",
//     "offerings" :"Online Cross Browser Testing Tool"
// },
// {
//     "name":"Selenium Testing",
//     "offerings" :"Selenium Automation Testing on Cloud"
// }