import React, { useEffect } from 'react';
import Header from '../components/header';

export default function NotFound() {
  useEffect(() => {
    document.title = 'Not Found - Instagram';
  }, []);

  return (
    <div className="bg-gray-background">
      <Header />
      <div className="mx-auto max-w-screen-lg h-screen">
        <p className="text-center text-4xl">Page Not Found!</p>
      </div>
    </div>
  );
}
