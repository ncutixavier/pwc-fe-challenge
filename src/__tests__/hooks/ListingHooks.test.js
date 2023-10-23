import { renderHook, act } from '@testing-library/react'
import { QueryClientProvider, QueryClient } from "react-query";
import { useListingById, useGetAllListings } from "../../hooks/ListingHooks";
import listingServices from "../../services/ListingServices";

const queryClient = new QueryClient();

listingServices.getListingById = jest.fn();
listingServices.getAllListings = jest.fn();


describe("useGetAllListings", () => {
    it("fetches all listings", async () => {
        const expectedListings = [{ id: "1", name: "Listing 1" }, { id: "2", name: "Listing 2" }];

        listingServices.getAllListings.mockResolvedValue(expectedListings);

        const { result } = renderHook(() => useGetAllListings(), {
            wrapper: ({ children }) => (
                <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
            ),
        });

        await act(async () => {
            expect(listingServices.getAllListings).toHaveBeenCalledWith(1);
        });

    });
});
