import React from 'react'
import ListingDetailsHeader from '@/components/header/ListingDetailsHeader'
import { useListingById } from '@/hooks/listing-hooks'
import { useRouter } from 'next/router'
import Loading from '@/components/Loading'
import { getListingImages } from '@/utils/utils'
import ListingImages from '@/components/listing-details/ListingImages'
import ShareListing from '@/components/listing-details/ShareListing'
import Link from 'next/link'

const ListingDetails = () => {
  const route = useRouter()
  const { id } = route.query
  const [isModalOpen, setModalOpen] = React.useState(false);
  const [isShareModalOpen, setShareModalOpen] = React.useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const openShareModal = () => {
    setShareModalOpen(true);
  };

  const { data, isFetching } = useListingById(route.query?.id)

  const classes = {
    second: 'rounded-tr-xl sm:rounded-none',
    last: 'rounded-br-xl sm:rounded-none',
    normalImage: 'hover:opacity-90 md:h-[35vh] object-cover cursor-pointer sm:min-w-[350px]'
  };
  const images = data ? getListingImages(data?.images, id ?? 1) : []

  if (!id || isFetching) {
    return (
      <div className='h-screen flex items-center justify-center'>
        <Loading />
      </div>
    )
  }

  return (
    <div className='w-[80%] mx-auto sm:w-[90%] xs:w-[95%]'>
      <Link href={'/'} className='mt-5 flex items-center gap-2 rounded-md sm:hidden'>
        <svg class="w-4 h-4 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13" />
        </svg><span>Home</span>
      </Link>

      <div className='md:hidden'><ListingDetailsHeader listing={data} isMobile={true} onShare={openShareModal} /></div>
      <div className="sm:flex sm:flex-col-reverse sm:mt-5">
        <ListingDetailsHeader listing={data} onShare={openShareModal} />

        <div className="grid grid-cols-2 md:gap-3 relative sm:flex overflow-auto">
          <button onClick={openModal} className='flex sm:hidden absolute bottom-5 right-5 z-10 bg-white border-gray-900 border items-center gap-2 hover:bg-gray-100 p-2 rounded-md'>
            <svg className="w-4 h-4 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6.143 1H1.857A.857.857 0 0 0 1 1.857v4.286c0 .473.384.857.857.857h4.286A.857.857 0 0 0 7 6.143V1.857A.857.857 0 0 0 6.143 1Zm10 0h-4.286a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286A.857.857 0 0 0 17 6.143V1.857A.857.857 0 0 0 16.143 1Zm-10 10H1.857a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286A.857.857 0 0 0 7 16.143v-4.286A.857.857 0 0 0 6.143 11Zm10 0h-4.286a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286a.857.857 0 0 0 .857-.857v-4.286a.857.857 0 0 0-.857-.857Z" />
            </svg><span className=''>Show all photos</span>
          </button>
          <div className="h-full sm:min-w-full">
            <img src={images[0]} onClick={openModal} alt="" className='hover:opacity-90 sm:rounded-none rounded-l-xl h-full object-cover cursor-pointer' />
          </div>
          <div className="grid grid-cols-2 gap-3 h-full sm:flex">
            {[1, 2, 3, 4].map(index => (
              <img key={index} src={images[index]} alt="" className={`${classes.normalImage} ${index === 2 ? classes.second : ''} ${index === 4 ? classes.last : ''}`} onClick={openModal} />
            ))}
          </div>
        </div>
      </div>

      <div class="my-5 text-justify leading-7 text-gray-600">{data?.summary}</div>
      <ListingImages isOpen={isModalOpen} onClose={closeModal} images={images} />
      <ShareListing listing={data} image={images[0]} isOpen={isShareModalOpen} onClose={() => setShareModalOpen(false)} />
    </div>
  )
}

export default ListingDetails