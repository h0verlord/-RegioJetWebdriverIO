describe("First test of Google page", () => {
  it("should open google page and log out the title", () => {
    browser.url("http://www.google.com");

    var title = browser.getTitle();
    console.log("title is " + title);
  });
});
