import React, { useState } from 'react';
import Modal from '../Modal';
import { useRouter } from 'next/router';
import { useQueryClient } from 'react-query';

const FilterListing = ({ isOpen, onClose }) => {
    const router = useRouter()
    const queryClient = useQueryClient()
    const amenities = ['Wifi', 'Kitchen', 'Air Conditioner', 'Washer'];
    const parking = ['tep-free guest entrance', 'Guest entrance wider than 32 inches', 'Accessible parking spot', 'Step-free path to the guest entrance']

    const [selectedAmenities, setSelectedAmenities] = useState([]);
    const [selectedParking, setSelectedParking] = useState([]);

    const toggleAmenitiesCheckbox = (value) => {
        if (selectedAmenities.includes(value)) {
            setSelectedAmenities(selectedAmenities.filter((item) => item !== value));
        } else {
            setSelectedAmenities([...selectedAmenities, value]);
        }
    };

    const toggleParkingCheckbox = (value) => {
        if (selectedParking.includes(value)) {
            setSelectedParking(selectedParking.filter((item) => item !== value));
        } else {
            setSelectedParking([...selectedParking, value]);
        }
    };

    const handleClose = () => onClose()

    const handleFilter = () => {
        const query = `${selectedAmenities.length > 0 ? `amenities=${selectedAmenities.join(",")}`: ''}&${selectedParking.length > 0 ? `parkings=${selectedParking.join(",")}`: ''}`
        router.push(`/listings?${query}&isFiltering=true`)
        queryClient.refetchQueries('listings')
        handleClose()
    }

    return (
        <div>
            <Modal isOpen={isOpen} onClose={onClose}>
                <h1 className='font-bold text-2xl py-4 mt-5 border-b border-gray-300'>Filter</h1>
                <div>
                    <h1 className='font-semibold text-xl mt-6 mb-3 text-gray-900'>Amenities</h1>
                    <div className="grid md:grid-cols-2 gap-5">
                        {amenities.map((item, i) => (
                            <div key={i} className="flex items-center px-4 border border-gray-300 rounded">
                                <input
                                    id={`bordered-checkbox-${i}`}
                                    type="checkbox"
                                    value={item}
                                    name="bordered-checkbox"
                                    checked={selectedAmenities.includes(item)}
                                    onChange={() => toggleAmenitiesCheckbox(item)}
                                    className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-transparent dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label
                                    htmlFor={`bordered-checkbox-${i}`}
                                    className="w-full py-4 ml-2 text-md font-medium text-gray-900"
                                >
                                    {item}
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='mt-7'>
                    <h1 className='font-semibold text-xl mt-6 mb-3 text-gray-900'>Guest entrance and parking</h1>
                    <div className="grid md:grid-cols-2 gap-5">
                        {parking.map((item, i) => (
                            <div key={i} className="flex items-center px-4 border border-gray-300 rounded">
                                <input
                                    id={`bordered-checkbox-${i}`}
                                    type="checkbox"
                                    value={item}
                                    name="bordered-checkbox"
                                    checked={selectedParking.includes(item)}
                                    onChange={() => toggleParkingCheckbox(item)}
                                    className="w-6 h-6 text-gray-600 bg-gray-100 border-gray-300 rounded focus:ring-transparent dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label
                                    htmlFor={`bordered-checkbox-${i}`}
                                    className="w-full py-4 ml-2 text-md font-medium text-gray-900"
                                >
                                    {item}
                                </label>
                            </div>
                        ))}
                    </div>
                </div>

                <button onClick={handleFilter} className='bg-black w-full rounded text-white h-10 mt-7 uppercase'>Filter</button>
            </Modal>
        </div>
    );
};

export default FilterListing;
