import { render, screen } from "@testing-library/react";
import { createGame } from "@/testing/data-generators";

import CardBasket from "./CardBasket";

const game = createGame({
  name: "Cyberpunk 2077",
  genre: "Action",
  description: "Description",
  price: 59.99,
  isNew: true,
});

describe("CardBasket Component", () => {
  beforeEach(() => {
    render(<CardBasket {...game} removeItemFromCart={vi.fn()} />);
  });

  it("renders game genre, name ,description and price correctly", () => {
    expect(screen.getByText("Action")).toBeInTheDocument();
    expect(screen.getByText("Cyberpunk 2077")).toBeInTheDocument();
    expect(screen.getByText("Description")).toBeInTheDocument();
    expect(screen.getByText(`$${game.price}`)).toBeInTheDocument();
  });

  it("displays game cover image", () => {
    const gameCover = screen.getByRole("img", {
      name: "Cyberpunk 2077 cover",
    });
    expect(gameCover).toBeVisible();
  });

  it("renders accessible delete item buttom", () => {
    expect(
      screen.getByLabelText(`Remove ${game.name} from cart`)
    ).toBeInTheDocument();
  });
});
