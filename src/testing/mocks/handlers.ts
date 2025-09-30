import { http, HttpResponse } from "msw";
import { TEST_SCENARIOS } from "./gamesStore";
import { API_ROUTES } from "@/services/routes";

export const handlers = [
  http.get(API_ROUTES.GET_GAMES, () => {
    return HttpResponse.json(TEST_SCENARIOS.SECOND_PAGE);
  }),
];
