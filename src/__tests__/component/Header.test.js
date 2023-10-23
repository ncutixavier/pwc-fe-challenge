"use client";

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from '../../components/header/MainHeader';
import Amenity from '../../components/Amenity';
import { useRouter } from 'next/router';
import '@testing-library/jest-dom'
import ListingDetailsHeader from '@/components/header/ListingDetailsHeader';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));


describe('HEADER', () => {
  it('Amenity component renders correctly', () => {
    const mockProps = {
      to: '/listings?amenity=castles',
      active: true,
      icon: '/assets/icons/castles.jpg',
      title: 'castles',
    };

    const push = jest.fn();
    useRouter.mockImplementation(() => ({
      push,
    }));

    render(<Amenity {...mockProps} />);

    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
    fireEvent.click(buttonElement);
    expect(push).toHaveBeenCalledWith(mockProps.to);

    const imageElement = screen.getByAltText('Picture of the author');
    expect(imageElement).toBeInTheDocument();

    useRouter.mockRestore();
  })

  it('renders the main header', () => {
    useRouter.mockImplementation(() => ({
      push: jest.fn(),
    }));

    render(<Header />);
    expect(screen.getByRole("left-arrow")).toBeInTheDocument();
    expect(screen.getByRole("right-arrow")).toBeInTheDocument();
  });

  it('renders the ListingDetailsHeader with the provided props', () => {
    const listing = {
      name: 'Sample Listing Name',
      rating: 4.5,
      reviews: 25,
      location: 'Sample Location',
    };
    const onShare = jest.fn();

    render(
      <ListingDetailsHeader listing={listing} onShare={onShare} />
    );

    const headerElement = screen.getByText('Sample Listing Name');
    expect(headerElement).toBeInTheDocument();
  });

})
