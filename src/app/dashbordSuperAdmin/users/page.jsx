import React from 'react';

const Users = () => {
  return (
    <div className='mt-20 '>
      <h1 className='mt-14'>Users rendez-vous</h1>
      {/* Carte de style pour afficher les informations des admins */}
      <div className="w-60 h-80 bg-gray-50 p-3 flex flex-col gap-1 rounded-2xl ">
        <div className="h-48 bg-gray-700 rounded-xl"></div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-row justify-between">
            <div className="flex flex-col">
              <span className="text-xl font-bold">Long Chair</span>
              <p className="text-xs text-gray-700">ID: 23432252</p>
            </div>
            <span className="font-bold text-red-600">$25.99</span>
          </div>
          <button className="hover:bg-sky-700 text-gray-50 bg-sky-800 py-2 rounded-md">Add to cart</button>
        </div>
      </div>
    </div>
  );
}

export default Users;
