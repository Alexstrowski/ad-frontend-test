import { render, screen } from "@testing-library/react";
import { createGame } from "@/testing/data-generators";

import CartDetail from "./CartDetail";
import { CartProvider } from "@/contexts/CartContext";
import userEvent from "@testing-library/user-event";

const game1 = createGame({
  name: "Cyberpunk 2077",
  genre: "Action",
  description: "Futuristic action adventure",
  price: 59.99,
  isNew: true,
});

const game2 = createGame({
  name: "The Witcher 3",
  genre: "RPG",
  description: "Epic fantasy adventure",
  price: 39.99,
  isNew: false,
});

describe("CardBasket Component", () => {
  beforeEach(() => {
    localStorage.setItem("shopping-cart", JSON.stringify([game1, game2]));
    render(
      <CartProvider>
        <CartDetail />
      </CartProvider>
    );
  });

  it("renders game genre, name ,description and price correctly", async () => {
    const user = userEvent.setup();
    const games1 = screen.getAllByText(game1.name);
    const games2 = screen.getAllByText(game2.name);

    expect(games1).toHaveLength(2);
    expect(games2).toHaveLength(2);
    expect(screen.getByText("2 items")).toBeInTheDocument();

    const deleteButton = screen.getByLabelText(
      "Remove Cyberpunk 2077 from cart"
    );
    await user.click(deleteButton);

    expect(screen.queryByText(game1.name)).not.toBeInTheDocument();
    expect(screen.getByText("1 item")).toBeInTheDocument();
    expect(games2).toHaveLength(2);
    expect(screen.getAllByText(`$${game2.price}`)).toHaveLength(3);
  });
});
