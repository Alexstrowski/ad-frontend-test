import { render, screen } from "@testing-library/react";

import Header from "./Header";
import { PATHS } from "@/config/paths";

describe("Header Component", () => {
  it("renders the store name logo", () => {
    render(<Header />);
    const logo = screen.getByRole("img", {
      name: "gamershop logo",
    });
    expect(logo).toBeVisible();
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
