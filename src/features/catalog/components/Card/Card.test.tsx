import { render, screen } from "@testing-library/react";
import { createGame } from "@/testing/data-generators";

import Card from "./Card";

const game = createGame({
  name: "Cyberpunk 2077",
  genre: "Action",
  price: 59.99,
  isNew: true,
});

describe("Card Component", () => {
  it("renders game genre, name and price correctly", () => {
    render(<Card {...game} />);
    expect(screen.getByText("ACTION")).toBeInTheDocument();
    expect(screen.getByText("Cyberpunk 2077")).toBeInTheDocument();
    expect(screen.getByText(`$${game.price}`)).toBeInTheDocument();
  });

  it("displays game cover image", () => {
    render(<Card {...game} />);
    const gameCover = screen.getByRole("img", {
      name: "Cyberpunk 2077 cover",
    });
    expect(gameCover).toBeVisible();
  });

  it("displays new badge when the game is new", () => {
    render(<Card {...game} />);
    expect(screen.getByText("New")).toBeInTheDocument();
  });

  it("hides new badge when the game is not new", () => {
    render(<Card {...{ ...game, isNew: false }} />);
    expect(screen.queryByText("New")).not.toBeInTheDocument();
  });

  it("renders accessible add to cart button", () => {
    render(<Card {...game} />);
    expect(
      screen.getByLabelText(`Add ${game.name} to cart`)
    ).toBeInTheDocument();
  });
});
