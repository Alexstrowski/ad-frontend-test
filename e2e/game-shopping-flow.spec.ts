import { API_ROUTES } from "@/services/routes";
import { expect, test } from "./fixtures/msw-fixture";
import { HttpResponse } from "msw";
import { TEST_SCENARIOS } from "@/testing/mocks/gamesStore";

test.describe("Game catalog flow", () => {
  test("should add Cyberpunk 2077 to cart and display it in cart page", async ({
    page,
  }) => {
    const game = "Cyberpunk 2077";
    await page.goto("/");

    await expect(page.getByText(game)).toBeVisible();

    const cyberpunkCard = page.locator("article").filter({ hasText: game });

    await cyberpunkCard.getByText("ADD TO CART").click();

    await page.waitForTimeout(100);

    await page.goto("/cart");

    await expect(
      page.getByRole("heading", { name: "Your Cart" })
    ).toBeVisible();

    await expect(page.getByText("1 item")).toHaveCount(2);
    await expect(page.getByText(game)).toHaveCount(2);
    await expect(page.getByText("$59.99")).toHaveCount(3);
  });

  test("should update URL with correct query param when filtering by RPG genre", async ({
    page,
    worker,
    http,
  }) => {
    await page.goto("/");

    const genreSelect = page.locator("select#genre-select");
    await expect(genreSelect).toBeVisible();

    await worker.use(
      http.get(API_ROUTES.GET_GAMES, () => {
        return HttpResponse.json(TEST_SCENARIOS.RPG_FILTERED);
      })
    );

    await genreSelect.selectOption("RPG");

    await page.waitForURL("**/?genre=RPG");

    await page.waitForSelector("article");
  });
});
