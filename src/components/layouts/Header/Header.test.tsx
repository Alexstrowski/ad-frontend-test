import { render, screen } from "@testing-library/react";

import Header from "./Header";
import { PATHS } from "@/config/paths";
import { CartProvider } from "@/contexts/CartContext";

describe("Header Component", () => {
  beforeEach(() => {
    render(
      <CartProvider>
        <Header />
      </CartProvider>
    );
  });
  it("renders the store name logo", () => {
    const logo = screen.getByRole("img", {
      name: "gamershop logo",
    });
    expect(logo).toBeVisible();
  });

  it("cart link is visible", () => {
    const cartLink = screen.getByRole("link", {
      name: "Abrir carrito de compras",
    });

    expect(cartLink).toBeVisible();
  });

  it("cart link has correct href", async () => {
    const cartLink = screen.getByRole("link", {
      name: "Abrir carrito de compras",
    });
    expect(cartLink).toHaveAttribute("href", PATHS.CART);
  });
});
