import { render, screen } from "@testing-library/react";

import Header from "./Header";
import { PATHS } from "@/config/paths";

describe("Header", () => {
  it("renders the store name", () => {
    render(<Header />);
    expect(screen.getByText("GamerShop")).toBeInTheDocument();
  });

  it("cart link is visible", () => {
    render(<Header />);
    const cartLink = screen.getByRole("link", {
      name: "Abrir carrito de compras",
    });

    expect(cartLink).toBeVisible();
  });

  it("cart link has correct href", async () => {
    render(<Header />);
    const cartLink = screen.getByRole("link", {
      name: "Abrir carrito de compras",
    });
    expect(cartLink).toHaveAttribute("href", PATHS.CART);
  });
});
