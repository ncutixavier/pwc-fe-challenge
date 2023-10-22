import React from 'react';
import { Nunito } from 'next/font/google'
import Header from '@/components/Header';

const nunito = Nunito({ subsets: ['latin'] })

const MainLayout = ({ children }) => {
  return (
      <div className={nunito.className}>
        <div className='px-14 sm:px-8 xs:px-4'>
          <header className='sticky top-0 z-20 bg-white'>
            <Header />
          </header>
          <main>{children}</main>
        </div>
      </div>
  )
}

export default MainLayout