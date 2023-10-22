import React from 'react'
import Modal from '../Modal'

const ListingImages = ({ isOpen, onClose, images }) => {
  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose} fullScreen={true}>
        <div className="grid md:grid-cols-2 gap-5 mt-8 w-[70%] sm:w-full mx-auto">
          {images.map((image, i) => (
            <div key={i} className={` ${i === 0 ? 'md:col-span-2' : 'md:col-span-1'}`}>
              <img src={image} alt={`Image ${i + 1}`} className="w-full h-auto" />
            </div>
          ))}
        </div>
      </Modal>
    </div>
  )
}

export default ListingImages
