import React from 'react';
import MainLayout from '@/layouts/MainLayout'
import ListingCard from '@/components/listing-card/ListingCard';
// import { useInfiniteQuery } from 'react-query'

// const fetchUsers = async ({ pageParam = 1 }) => {
//   const res = await fetch(`https://randomuser.me/api/?page=${pageParam}&results=10`);
//   return res.json();
// }

const HomePage = () => {
  const images = [
    'https://a0.muscache.com/im/pictures/miso/Hosting-32619177/original/1a7b2d9b-cc8c-47cc-9195-bb7bc6c8f5b0.jpeg?im_w=720',
    'https://a0.muscache.com/im/pictures/miso/Hosting-32619177/original/f698873c-5733-4269-8cdd-f583d50e329c.jpeg?im_w=720',
    'https://a0.muscache.com/im/pictures/miso/Hosting-32619177/original/06538e48-4bb5-49d4-9e1d-be1c4dcf8cdc.jpeg?im_w=720',
    'https://a0.muscache.com/im/pictures/miso/Hosting-32619177/original/09cbac72-6746-4e6b-879e-190b182eb354.jpeg?im_w=720',
    'https://a0.muscache.com/im/pictures/miso/Hosting-32619177/original/09cbac72-6746-4e6b-879e-190b182eb354.jpeg?im_w=720',
  ]

  return (
    <MainLayout>
      <div className='flex justify-between flex-wrap'>
        {[1, 2, 3, 4, 5].map((i, el) => {
          return <ListingCard key={i} images={images} />;
        })}
      </div>
    </MainLayout>
  )
}

export default HomePage