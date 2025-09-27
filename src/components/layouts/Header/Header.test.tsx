import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import Header from "./Header";

describe("Header", () => {
  it("renders the store name", () => {
    render(<Header />);
    expect(screen.getByText("GamerShop")).toBeInTheDocument();
  });

  it("cart button is visible", () => {
    render(<Header />);
    const cartButton = screen.getByRole("button", {
      name: "Abrir carrito de compras",
    });

    expect(cartButton).toBeVisible();
    expect(cartButton).toBeEnabled();
  });

  it("cart button can be clicked", async () => {
    const user = userEvent.setup();
    render(<Header />);
    const cartButton = screen.getByRole("button", {
      name: "Abrir carrito de compras",
    });

    await user.click(cartButton);
  });
});
