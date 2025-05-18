import { test, expect } from "@playwright/test";

test.describe("HOME PAGE", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000/en");
  });

  test.afterEach(async ({ page }) => {
    // Reset to English explicitly if needed
    await page.goto("http://localhost:3000/en");
  });

  test.describe("Home page metadata", async () => {
    test("should have a title", async ({ page }) => {
      await expect(page).toHaveTitle("Galleria");
    });

    test("should have URL", async ({ page }) => {
      await expect(page).toHaveURL("http://localhost:3000/en");
    });
  });

  test.describe("Header", async () => {
    test("header is visible", async ({ page }) => {
      const header = page.getByTestId("header");
      await expect(header).toBeVisible();
    });

    test("logo is visible", async ({ page }) => {
      const logo = page.getByTestId("galleria-logo");
      await expect(logo).toBeVisible();
    });

    test("trigger slideshow button is visible", async ({ page }) => {
      const triggerSlideshowBtn = page.getByRole("button", {
        name: "start slideshow",
      });
      await expect(triggerSlideshowBtn).toBeVisible();
    });
  });

  test.describe("i18n selector", async () => {
    test("Locale selector is visible", async ({ page }) => {
      const localeSelector = page.getByTestId("locale-selector");
      await expect(localeSelector).toBeVisible();
    });

    test("Switch UI to FR", async ({ page }) => {
      const localeSelector = page.getByTestId("locale-selector");
      await localeSelector.click();

      const frLocaleSelectItem = page.getByRole("option", { name: "FR" });
      await frLocaleSelectItem.click();

      const triggerSlideshowBtn = page.getByRole("button", {
        name: "démarrer le slideshow",
      });
      await expect(triggerSlideshowBtn).toBeVisible();
      await expect(page).toHaveURL("http://localhost:3000/fr");
    });

    test("Switch UI to ES", async ({ page }) => {
      const localeSelector = page.getByTestId("locale-selector");
      await localeSelector.click();

      const esLocaleSelectItem = page.getByRole("option", { name: "ES" });
      await esLocaleSelectItem.click();

      const triggerSlideshowBtn = page.getByRole("button", {
        name: "iniciar slideshow",
      });
      await expect(triggerSlideshowBtn).toBeVisible();
      await expect(page).toHaveURL("http://localhost:3000/es");
    });

    test("Switch UI to EN", async ({ page }) => {
      const localeSelector = page.getByTestId("locale-selector");
      await localeSelector.click();

      const enLocaleSelectItem = page.getByRole("option", { name: "EN" });
      await enLocaleSelectItem.click();

      const triggerSlideshowBtn = page.getByRole("button", {
        name: "start slideshow",
      });
      await expect(triggerSlideshowBtn).toBeVisible();
      await expect(page).toHaveURL("http://localhost:3000/en");
    });
  });

  test.describe("theme toggle button", async () => {
    test("Theme toggle button is visible", async ({ page }) => {
      const themeToggleBtn = page.getByTestId("theme-toggle-button");
      await expect(themeToggleBtn).toBeVisible();
    });

    test("Switch dark mode", async ({ page }) => {
      const themeToggleBtn = page.getByTestId("theme-toggle-button");
      await themeToggleBtn.click();

      const darkMenuItem = page.getByRole("menuitem", { name: "Dark" });
      await darkMenuItem.click();

      const moonIcon = page.getByTestId("moon-icon");
      await expect(moonIcon).toBeVisible();

      const htmlElement = page.locator("html");
      await expect(htmlElement).toHaveClass(/dark/);
    });

    test("Switch light mode", async ({ page }) => {
      const themeToggleBtn = page.getByTestId("theme-toggle-button");
      await themeToggleBtn.click();

      const lightMenuItem = page.getByRole("menuitem", { name: "Light" });
      await lightMenuItem.click();

      const sunIcon = page.getByTestId("sun-icon");
      await expect(sunIcon).toBeVisible();

      const htmlElement = page.locator("html");
      await expect(htmlElement).toHaveClass(/light/);
    });

    // TODO: Find a way to test system theme click
  });

  test.describe("Painting cards", async () => {
    test("First painting card is visible", async ({ page }) => {
      const paintingCards = page.getByTestId("painting-card").first();

      await expect(paintingCards).toBeVisible();
      await expect(paintingCards).toHaveAttribute(
        "href",
        "/paintings/starry-night"
      );
    });

    test("Last painting card is visible", async ({ page }) => {
      const paintingCards = page.getByTestId("painting-card").last();

      await expect(paintingCards).toBeVisible();
      await expect(paintingCards).toHaveAttribute(
        "href",
        "/paintings/the-swing"
      );
    });
  });
});
