import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "./page";
import { CartProvider } from "@/contexts/CartContext";
import { Header } from "@/components/layouts/Header";
import { server } from "@/testing/mocks/server";
import { http, HttpResponse } from "msw";
import { TEST_SCENARIOS } from "@/testing/mocks/gamesStore";
import userEvent from "@testing-library/user-event";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn() }),
  useSearchParams: () => new URLSearchParams(),
}));

describe("Home page component", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("update cart counter in header when adding item to cart", async () => {
    const user = userEvent.setup();
    server.use(
      http.get("/api/games", () => {
        return HttpResponse.json(TEST_SCENARIOS.INITIAL_PAGE);
      })
    );
    const searchParams = { page: 1, genre: "" };
    const Component = await Home({ searchParams });

    render(
      <CartProvider>
        <Header />
        {Component}
      </CartProvider>
    );

    const buttons = await screen.findAllByText("ADD TO CART");

    await user.click(buttons[0]);
    expect(screen.getByText("1")).toBeInTheDocument();
    await user.click(buttons[1]);
    expect(screen.getByText("2")).toBeInTheDocument();
  });

  it("update cart counter in header when deleting item to cart", async () => {
    const user = userEvent.setup();
    server.use(
      http.get("/api/games", () => {
        return HttpResponse.json(TEST_SCENARIOS.INITIAL_PAGE);
      })
    );
    const searchParams = { page: 1, genre: "" };
    const Component = await Home({ searchParams });

    render(
      <CartProvider>
        <Header />
        {Component}
      </CartProvider>
    );

    const buttons = await screen.findAllByText("ADD TO CART");

    await user.click(buttons[0]);
    await user.click(buttons[1]);
    await user.click(buttons[2]);
    expect(screen.getByText("3")).toBeInTheDocument();
    await user.click(buttons[0]);
    expect(screen.getByText("2")).toBeInTheDocument();
  });

  it("show cart counter if user has saved items in his browser", async () => {
    localStorage.setItem(
      "shopping-cart",
      JSON.stringify([{ id: "1", name: "game 1", price: 1 }])
    );

    server.use(
      http.get("/api/games", () => {
        return HttpResponse.json(TEST_SCENARIOS.INITIAL_PAGE);
      })
    );
    const searchParams = { page: 1, genre: "" };
    const Component = await Home({ searchParams });

    render(
      <CartProvider>
        <Header />
        {Component}
      </CartProvider>
    );

    expect(screen.getByText("1")).toBeInTheDocument();
  });
});
