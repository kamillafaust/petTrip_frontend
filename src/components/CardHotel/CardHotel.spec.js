import React from "react";
import { render, screen, waitFor } from "@testing-library/react";

import { hotelsHandlerException } from "../../tests/hotels/handlers";
import { mswServer } from "../../tests/msw-server";

import { HotelContextProvider } from "../../contextApi/useHotels";
import { CitiesContextProvider } from "../../contextApi/useCities";
import CardHotel from ".";

describe("CardHotel component", () => {
  it.only("should show the list of hotels", async () => {
    const { findAllByTestId } = render(
      <CitiesContextProvider>
        <HotelContextProvider>
          <CardHotel />
        </HotelContextProvider>
      </CitiesContextProvider>
    );
    const results = await findAllByTestId(/hotel-id-\d+/);

    await waitFor(() => {
      expect(results).toHaveLength(1);
    });
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
