import React from 'react';
import { Nunito } from 'next/font/google'
import Header from '@/components/header/MainHeader';

const nunito = Nunito({ subsets: ['latin'] })

const MainLayout = ({ children }) => {
  return (
    <div className={nunito.className}>
      <div className=''>
        <header className='sticky top-0 z-20 bg-white w-full'>
          <Header />
        </header>
        <main className='px-14 sm:px-8 xs:px-4'>{children}</main>
      </div>
    </div>
  )
}

export default MainLayout