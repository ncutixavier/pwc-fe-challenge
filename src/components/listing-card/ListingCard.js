import React from 'react'
import CardSlider from './CardSlider'
import Link from 'next/link';
import { getListingImages, formatDateRange } from '@/utils/utils';

const ListingCard = ({ listing }) => {

    return (
        <Link href={`listings/2`} rel="noopener noreferrer" target="_blank">
            <div className='w-[330px] mb-8 listing-card-container cursor-pointer'>
                <CardSlider images={getListingImages(listing?.images, listing?.id)} />
                <div className='flex gap-5 items-start mt-3'>
                    <h1 className='font-bold flex-1'>{listing?.name}</h1>
                    <div className='flex items-center gap-1'>
                        <svg className="w-3 h-3 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <span>{(listing?.rating % 5).toFixed(1)}</span>
                    </div>
                </div>
                <div className='text-gray-500'>Hosted by {listing?.owner}</div>
                <div className='text-gray-500'>{formatDateRange(listing?.checkin, listing?.checkout)}</div>
                <div className='mt-2'>
                    <span className='font-bold'>${(listing?.price / 1000).toFixed()} </span>night</div>
            </div>
        </Link>
    )
}

export default ListingCard