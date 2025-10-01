import { render, screen, cleanup } from "@testing-library/react";
import { createGame } from "@/testing/data-generators";

import Card from "./Card";

const game = createGame({
  name: "Cyberpunk 2077",
  genre: "Action",
  price: 59.99,
  isNew: true,
});

describe("Card Component", () => {
  beforeEach(() => {
    render(
      <Card
        {...game}
        addItemToCart={vi.fn()}
        isItemInCart={false}
        removeItemFromCart={vi.fn()}
      />
    );
  });
  it("renders game genre, name and price correctly", () => {
    expect(screen.getByText("ACTION")).toBeInTheDocument();
    expect(screen.getByText("Cyberpunk 2077")).toBeInTheDocument();
    expect(screen.getByText(`$${game.price}`)).toBeInTheDocument();
  });

  it("displays game cover image", () => {
    const gameCover = screen.getByRole("img", {
      name: "Cyberpunk 2077 cover",
    });
    expect(gameCover).toBeVisible();
  });

  it("displays new badge when the game is new", () => {
    expect(screen.getByText("New")).toBeInTheDocument();
  });

  it("hides new badge when the game is not new", () => {
    cleanup();
    render(
      <Card
        {...{ ...game, isNew: false }}
        addItemToCart={vi.fn()}
        isItemInCart={false}
        removeItemFromCart={vi.fn()}
      />
    );
    expect(screen.queryByText("New")).not.toBeInTheDocument();
  });

  it("renders accessible add to cart button", () => {
    expect(
      screen.getByLabelText(`Add ${game.name} to cart`)
    ).toBeInTheDocument();
  });
});
