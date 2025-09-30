import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GamesSection from "./GamesSection";
import { GamesListResponse } from "@/types/api";
import { TEST_SCENARIOS } from "@/testing/mocks/gamesStore";
import { server } from "@/testing/mocks/server";
import { http, HttpResponse } from "msw";
import { CartProvider } from "@/contexts/CartContext";
import { API_ROUTES } from "@/services/routes";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn() }),
  useSearchParams: () => new URLSearchParams(),
}));

describe("GamesSection Component", () => {
  const mockInitialData: GamesListResponse = TEST_SCENARIOS.INITIAL_PAGE;

  beforeEach(() => {
    render(
      <CartProvider>
        <GamesSection initialData={mockInitialData} />
      </CartProvider>
    );
  });

  it("shows SEE MORE button when there are more pages", () => {
    expect(
      screen.getByRole("button", { name: /SEE MORE/i })
    ).toBeInTheDocument();
  });

  it("loads more games when SEE MORE is clicked", async () => {
    const user = userEvent.setup();

    const initialGames = screen.getAllByText(/Game \d+/);
    expect(initialGames).toHaveLength(6);

    const seeMoreButton = screen.getByRole("button", { name: /SEE MORE/i });
    await user.click(seeMoreButton);

    await waitFor(() => {
      const updatedGames = screen.getAllByText(/Game \d+/);
      expect(updatedGames.length).toBe(10);
    });
  });

  it("does not have to show SEE MORE button when there are not more games", async () => {
    const user = userEvent.setup();

    const seeMoreButton = screen.getByRole("button", { name: /SEE MORE/i });
    await user.click(seeMoreButton);

    await waitFor(() => {
      expect(seeMoreButton).not.toBeInTheDocument();
    });
  });

  it("shows RPG games when user filters by RPG genre", async () => {
    const user = userEvent.setup();

    const selectElement = screen.getByRole("combobox");
    server.use(
      http.get(API_ROUTES.GET_GAMES, () => {
        return HttpResponse.json(TEST_SCENARIOS.RPG_FILTERED);
      })
    );
    await user.click(selectElement);
    await user.selectOptions(selectElement, "RPG");
    await waitFor(() => {
      const updatedGames = screen.getAllByText(/Game \d+/);
      expect(updatedGames.length).toBe(2);
    });
  });
});
