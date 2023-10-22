import { createApi } from 'react-query';

const api = createApi({
  endpoints: {
    // Define your API endpoints here
  },
});

export const { useQuery, useMutation } = api;