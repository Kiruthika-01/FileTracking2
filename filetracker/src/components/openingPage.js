import React from 'react';
import { Link } from 'react-router-dom';

export default function OpeningPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-12 text-black">Welcome to FileTracker App</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Link to="/admin" className="w-full">
          <div className="p-8 bg-black text-white rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-2xl font-semibold text-center">Admin Login</h2>
          </div>
        </Link>
        <Link to="/office" className="w-full">
          <div className="p-8 bg-black text-white rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-2xl font-semibold text-center">Office Login</h2>
          </div>
        </Link>
        <Link to="/employee" className="w-full">
          <div className="p-8 bg-black text-white rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-2xl font-semibold text-center">Employee Login</h2>
          </div>
        </Link>
        <Link to="/monitoring" className="w-full">
          <div className="p-8 bg-black text-white rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-2xl font-semibold text-center">Monitoring</h2>
          </div>
        </Link>
      </div>
    </div>
  );
}
