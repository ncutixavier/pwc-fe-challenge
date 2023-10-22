import { useEffect } from "react"
import MainLayout from '@/layouts/MainLayout'
import ListingCard from '@/components/listing-card/ListingCard';
import { useInView } from "react-intersection-observer";
import {useGetAllListings} from "@/hooks/listing-hooks"
import Loading from "@/components/Loading";


const HomePage = () => {

  const { ref, inView } = useInView();
  const { data, isSuccess, hasNextPage, fetchNextPage, isFetchingNextPage } = useGetAllListings();

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
              <div ref={ref}  key={i}>
                <ListingCard listing={listing} />
              </div>
            ))
          )}
      </div>

      {isFetchingNextPage && <div className="flex items-center justify-center h-[30vh]"><Loading /></div>}
    </MainLayout>
  )
}

export default HomePage