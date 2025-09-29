import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GamesSection from "./GamesSection";
import { GamesListResponse } from "@/types/api";
import { GAMES_BY_PAGE, TEST_SCENARIOS } from "@/testing/mocks/gamesStore";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn() }),
  useSearchParams: () => new URLSearchParams(),
}));

describe("GamesSection Component", () => {
  const mockInitialData: GamesListResponse = TEST_SCENARIOS.INITIAL_PAGE;

  it("shows SEE MORE button when there are more pages", () => {
    render(<GamesSection initialData={mockInitialData} />);
    expect(
      screen.getByRole("button", { name: /SEE MORE/i })
    ).toBeInTheDocument();
  });

  it("loads more games when SEE MORE is clicked", async () => {
    const user = userEvent.setup();
    render(<GamesSection initialData={mockInitialData} />);

    const initialGames = screen.getAllByText(/Game \d+/);
    expect(initialGames).toHaveLength(6);

    const seeMoreButton = screen.getByRole("button", { name: /SEE MORE/i });
    await user.click(seeMoreButton);

    await waitFor(() => {
      const updatedGames = screen.getAllByText(/Game \d+/);
      expect(updatedGames.length).toBe(10);
    });
  });

  it("dont have to show SEE MORE button when there are not more games", async () => {
    const user = userEvent.setup();
    render(<GamesSection initialData={mockInitialData} />);

    const seeMoreButton = screen.getByRole("button", { name: /SEE MORE/i });
    await user.click(seeMoreButton);

    await waitFor(() => {
      expect(seeMoreButton).not.toBeInTheDocument();
    });
  });
});
