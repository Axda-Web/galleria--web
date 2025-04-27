import { test, expect } from "@playwright/test";

test.describe("HOME PAGE", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000/");
  });
  test("has header", async ({ page }) => {
    const logo = page.getByRole("link");

    expect(logo).toBeVisible();
  });
});
