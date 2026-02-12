import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function Layout() {
  return (
    <div className="min-h-screen bg-theme-backdrop p-[16px] md:p-[70px] flex items-center justify-center">
      <div className="bg-theme-bg border border-theme-stroke rounded-ide-md flex flex-col w-full max-w-[1920px] h-[calc(100vh-32px)] md:h-[calc(100vh-140px)] overflow-hidden">
        <Header />
        <div className="flex flex-1 overflow-hidden">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
