import { useEffect } from "react"
import MainLayout from '@/layouts/MainLayout'
import ListingCard from '@/components/listing/ListingCard';
import { useInView } from "react-intersection-observer";
import { useGetAllListings } from "@/hooks/ListingHooks"
import Loading from "@/components/Loading";


const HomePage = () => {

  const { ref, inView } = useInView();
  const { data, isLoading, isSuccess, hasNextPage, fetchNextPage, isFetchingNextPage } = useGetAllListings();

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);

  return (
    <MainLayout>
      <div className='flex justify-between flex-wrap'>
        {isSuccess &&
          data.pages.map((page) =>
            page.map((listing, i) => (
              <div ref={ref} key={i}>
                <ListingCard listing={listing} />
              </div>
            ))
          )}
      </div>

      {isLoading && <Loading height={50} />}
      {isFetchingNextPage && <Loading height={30} />}
    </MainLayout>
  )
}

export default HomePage