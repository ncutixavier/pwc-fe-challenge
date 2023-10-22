class ListingServices {
    API_BASE_URL = 'https://6531a8214d4c2e3f333d33ed.mockapi.io/api/v1/listings';
    LIMIT = 8;

    getLimit = () => this.LIMIT

    async getAllListings(page) {
        try {
            const response = await fetch(`${this.API_BASE_URL}?limit=${this.LIMIT}&page=${page}`);
            if (!response.ok) {
                throw new Error('Failed to fetch listings');
            }
            return response.json();
        } catch (error) {
            throw error;
        }
    }

    async getListingById(id) {
        try {
            const response = await fetch(`${this.API_BASE_URL}/${id}`);
            if (!response.ok) {
                throw new Error('Failed to fetch the listing by ID');
            }
            return response.json();
        } catch (error) {
            throw error;
        }
    }
}

export default new ListingServices;
