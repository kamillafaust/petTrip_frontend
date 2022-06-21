import React from "react";
import { render, screen } from "@testing-library/react";

import { hotelsHandlerException } from "../../tests/hotels/handlers";
import { mswServer } from "../../tests/msw-server";

import { HotelContextProvider } from "../../contextApi/useHotels";
import { CitiesContextProvider } from "../../contextApi/useCities";
import CardHotel from ".";

describe("CardHotel component", () => {
  it("should show the list of hotels", async () => {
    const { findAllByTestId, findAllByText } = render(
      <CitiesContextProvider>
        <HotelContextProvider>
          <CardHotel />
        </HotelContextProvider>
      </CitiesContextProvider>
    );

    const results = await findAllByTestId(/hotel-id-\d+/);
    expect(results).toHaveLength(2);

    const hotelNames = await findAllByText("Pet Hotel Astrodog Léo");
    expect(hotelNames[0]).toBeInTheDocument();
    expect(hotelNames[0].textContent).toBe("Pet Hotel Astrodog Léo");
  });

  it("displays error message when fetching hotels error", async () => {
    mswServer.use(hotelsHandlerException);

    render(
      <CitiesContextProvider>
        <HotelContextProvider>
          <CardHotel />
        </HotelContextProvider>
      </CitiesContextProvider>
    );

    const errorDisplay = await screen.findByText("Sinto muito.");
    expect(errorDisplay).toBeInTheDocument();
  });
});
