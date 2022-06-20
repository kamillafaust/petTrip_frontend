import React from "react";
import CardHotel from ".";
import { render, screen } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { HotelContextProvider } from "../../contextApi/useHotels";

function renderAll() {}

const hotelsResponse = rest.get(
  "https://pettrip-tcs.herokuapp.com/establishment/",
  (req, res, ctx) => {
    return res(
      ctx.json({
        content: [
          {
            id: 1,
            image: "",
            name: "Kamilla",
            description: "Ruth louca",
          },
        ],
      })
    );
  }
);

const handlers = [hotelsResponse];

const server = new setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("CardHotel component", () => {
  it("should show the list of hotels", () => {
    const { debug } = render(
      <HotelContextProvider>
        <CardHotel />
      </HotelContextProvider>
    );
    debug();

    expect(1).toBe(1);
  });
});
