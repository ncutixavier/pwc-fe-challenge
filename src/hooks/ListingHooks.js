import { useQuery, useInfiniteQuery } from "react-query";
import listingServices from "@/services/ListingServices";

const useListingById = (id) => {
    return useQuery(["listing", id], () => listingServices.getListingById(id), {
        enabled: id !== undefined,
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
