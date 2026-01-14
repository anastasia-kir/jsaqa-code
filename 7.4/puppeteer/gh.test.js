let page;

describe("Github main page tests", () => {
  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto("https://github.com/team");
  });

  afterEach(async () => {
    await page.close();
  });

  test("The h1 header content", async () => {
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector("h1");
    const title = await page.title();
    expect(title).toEqual(
      "GitHub: Where the world builds software · GitHub"
    );
  }, 20000);

  test("The first link attribute", async () => {
    const actual = await page.$eval("a", link =>
      link.getAttribute("href")
    );
    expect(actual).toEqual("#start-of-content");
  }, 20000);

  test("The page contains Sign up button", async () => {
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, { visible: true });
    const actual = await page.$eval(
      btnSelector,
      link => link.textContent
    );
    expect(actual).toContain("Sign up for free");
  }, 20000);
});


// Задача 2

describe("Github other pages headers", () => {
  beforeEach(async () => {
    page = await browser.newPage();
  });

  afterEach(async () => {
    await page.close();
  });

  test("Careers page header", async () => {
    await page.goto("https://github.com/careers");
    await page.waitForSelector("h1");
    const header = await page.$eval("h1", el => el.textContent);
    expect(header).toContain("Careers");
  }, 20000);

  test("About page header", async () => {
    await page.goto("https://github.com/about");
    await page.waitForSelector("h1");
    const header = await page.$eval("h1", el => el.textContent);
    expect(header).toContain("About");
  }, 20000);

  test("Pricing page header", async () => {
    await page.goto("https://github.com/pricing");
    await page.waitForSelector("h1");
    const header = await page.$eval("h1", el => el.textContent);
    expect(header).toContain("Pricing");
  }, 20000);
});
