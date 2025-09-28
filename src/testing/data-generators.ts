import {
  randUuid,
  randImg,
  randProductName,
  randProductDescription,
  randNumber,
  randBoolean,
  rand,
} from "@ngneat/falso";
import { Game } from "@/utils/endpoint";

const generateGame = (): Game => ({
  id: randUuid(),
  genre: rand(["Action", "Adventure", "RPG"]),
  image: randImg(),
  name: randProductName(),
  description: randProductDescription(),
  price: randNumber({ min: 9.99, max: 99.99, fraction: 2 }),
  isNew: randBoolean(),
});

export const createGame = <T extends Partial<Game>>(overrides?: T): Game => {
  return { ...generateGame(), ...overrides };
};
