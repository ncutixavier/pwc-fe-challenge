import React from 'react'
import Modal from '../Modal'
import Image from 'next/image'
import Link from 'next/link'

const ShareListing = ({ listing, image, isOpen, onClose }) => {
    const socials = [
        {
            title: "Whatsapp",
            link: `https://api.whatsapp.com/send?text=${window.location.origin}/listing/${listing.id}`
        },
        {
            title: "Twitter",
            link: `https://twitter.com/intent/tweet?url=${window.location.origin}/listing/${listing.id}`
        },
        {
            title: "Facebook",
            link: `https://www.facebook.com/sharer/sharer.php?u=${window.location.origin}/listing/${listing.id}`
        }
    ]
    return (
        <div>
            <Modal isOpen={isOpen} onClose={onClose}>
                <h1 className="text-2xl font-bold mt-6">Share this place</h1>
                <div className="flex gap-5 my-8">
                    <img src={image} alt="Listing image" srcSet="" className='w-20 h-20 rounded-xl' />
                    <div className="text-xl">{listing?.name}</div>
                </div>

                <div className="grid md:grid-cols-2 gap-5 md:pr-8 pb-8">
                    {socials.map((item, i) => (
                        <Link href={item.link} target='_blank' key={i} className='flex gap-5 border border-gray-500 px-8 py-3 rounded-xl'>
                            <Image
                                src={`/assets/icons/${item.title.toLowerCase()}.svg`}
                                alt="Picture of the author"
                                width={30}
                                height={30}
                                quality={100}/>
                            <span>{item.title}</span>
                        </Link>
                    ))}
                </div>
            </Modal>
        </div>
    )
}

export default ShareListing