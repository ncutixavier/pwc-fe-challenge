import { useQuery, useInfiniteQuery } from "react-query";
import listingServices from "@/services/listing-services";

const useListingById = (id) => {
    return useQuery(["listings", id], () => listingServices.getListingById(id), {
      enabled: id !== undefined, // Only enable the query if id is not null
    });
  };

const useGetAllListings = () => {
    return useInfiniteQuery("listings", ({ pageParam = 1 }) => listingServices.getAllListings(pageParam), {
        getNextPageParam: (lastPage, allPages) => {
            const nextPage =
                lastPage.length === listingServices.getLimit() ? allPages.length + 1 : undefined;
            return nextPage;
        },
    })
}

export { useListingById, useGetAllListings }
