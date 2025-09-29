import { http, HttpResponse } from "msw";
import { TEST_SCENARIOS } from "./gamesStore";

export const handlers = [
  http.get("/api/games", () => {
    return HttpResponse.json(TEST_SCENARIOS.SECOND_PAGE);
  }),
];
