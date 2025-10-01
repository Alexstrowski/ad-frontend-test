import { render, screen } from "@testing-library/react";
import { createGame } from "@/testing/data-generators";

import CartSummary from "./CartSummary";

const game1 = createGame({
  name: "Cyberpunk 2077",
  genre: "Action",
  price: 59.99,
});

const game2 = createGame({
  name: "The Witcher 3",
  genre: "RPG",
  price: 39.99,
});

const game3 = createGame({
  name: "Red Dead Redemption 2",
  genre: "Adventure",
  price: 49.99,
});

const cartItems = [game1, game2, game3];
const total = cartItems.reduce(
  (accumulator, currentValue) => accumulator + currentValue.price,
  0
);

describe("CardBasket Component", () => {
  beforeEach(() => {
    render(<CartSummary cartItems={cartItems} total={total} />);
  });

  it("renders order summary information correctly", () => {
    expect(screen.getByText("3 items")).toBeInTheDocument();
    expect(screen.getByText(game1.name)).toBeInTheDocument();
    expect(screen.getByText(game2.name)).toBeInTheDocument();
    expect(screen.getByText(game3.name)).toBeInTheDocument();
    expect(screen.getByText(`$${game1.price}`)).toBeInTheDocument();
    expect(screen.getByText(`$${game2.price}`)).toBeInTheDocument();
    expect(screen.getByText(`$${game3.price}`)).toBeInTheDocument();
    expect(screen.getByText(`$${total}`)).toBeInTheDocument();
  });
});
