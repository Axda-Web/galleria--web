import { test, expect } from "@playwright/test";

test.describe("HOME PAGE", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000/en");
  });

  test("should have a title", async ({ page }) => {
    await expect(page).toHaveTitle("Galleria");
  });

  test("should have URL", async ({ page }) => {
    await expect(page).toHaveURL("http://localhost:3000/en");
  });
  test("has header", async ({ page }) => {
    const header = page.getByTestId("header");
    await expect(header).toBeVisible();

    const logo = page.getByTestId("galleria-logo");
    await expect(logo).toBeVisible();

    const triggerSlideshowBtn = page.getByRole("button", {
      name: "start slideshow",
    });
    await expect(triggerSlideshowBtn).toBeVisible();
  });
});
