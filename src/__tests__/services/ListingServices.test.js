import '@testing-library/jest-dom'
import ListingServices from '@/services/ListingServices';
import { API_BASE_URL } from '../../api/apiConfig';

describe('ListingServices', () => {
    it('should return the specified limit', () => {
        const limit = ListingServices.getLimit();
        expect(limit).toBe(8);
    });

    it('should fetch all listings', async () => {
        const mockResponseData = [{ id: '1', name: 'Listing 1' }, { id: '2', name: 'Listing 2' }];

        global.fetch = jest.fn().mockResolvedValue({
            ok: true,
            json: () => Promise.resolve(mockResponseData),
        });

        const page = 1;
        const listings = await ListingServices.getAllListings(page);
        expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}?limit=8&page=${page}`);

        expect(listings).toEqual(mockResponseData);
    });

    it('should fetch a listing by ID', async () => {
        const listingId = '123';

        global.fetch = jest.fn().mockResolvedValue({
            ok: true,
            json: () => Promise.resolve({ id: listingId, name: 'Sample Listing' }), // Mock response data
        });

        const listing = await ListingServices.getListingById(listingId);
        expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/${listingId}`);
        expect(listing).toEqual({ id: listingId, name: 'Sample Listing' });
    });

    it('should throw an error when fetch fails', async () => {
        global.fetch = jest.fn().mockResolvedValue({
            ok: false,
        });

        try {
            await ListingServices.getAllListings(1);
            expect(true).toBe(false);
        } catch (error) {
            expect(error.message).toBe('Failed to fetch listings');
        }
    });
});

