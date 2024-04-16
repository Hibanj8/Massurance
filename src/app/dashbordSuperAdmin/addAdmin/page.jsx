"use client"
import React, { useState } from 'react';
import axios from 'axios'; 
import Link from "next/link";
import { usePathname } from "next/navigation";

const token = localStorage.getItem('access_token');


const AddAdmin = () => {
  const [newAdmin, setNewAdmin] = useState({ name: '', email: '', password:'', role: ''});
  const apiUrl = 'http://localhost:3000';
  const navigate = usePathname();


  const handleAddAdmin = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${apiUrl}/api/admin`, newAdmin, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setNewAdmin({ name: '', email: '',password:'', role: '' });
      navigate('/dashbordSuperAdmin/admin');
    } catch (error) {
      console.error('Error adding admin:', error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="container p-6 bg-white shadow-xl rounded-xl w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-[#D0E153]">Create Admin</h1>

        <form onSubmit={handleAddAdmin} className="max-w-md mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-600 ">
              Nom :
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={newAdmin.name}
              onChange={(e) => setNewAdmin({ ...newAdmin, name: e.target.value })}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email :
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={newAdmin.email}
              onChange={(e) => setNewAdmin({ ...newAdmin, email: e.target.value })}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              password :
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={newAdmin.password}
              onChange={(e) => setNewAdmin({ ...newAdmin, password: e.target.value })}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="role" className="block text-sm font-medium text-gray-600">
              Rôle :
            </label>
            <select
              id="role"
              name="role"
              value={newAdmin.role}
              onChange={(e) => setNewAdmin({ ...newAdmin, role: e.target.value })}
              className="mt-1 p-2 border rounded-md w-full "
            >
              <option value="">Sélectionner un rôle</option>
              <option value="admin">Admin</option>
              <option value="superadmin">Super Admin</option>
            </select>
          </div>

          <button type="submit" className="bg-[#D0E153] text-white px-4 py-2 rounded-md hover:bg-[#99a53ed9]">
            Ajouter
          </button>
        </form>
        
        <Link href="/dashbordSuperAdmin/admin" className="block text-center mt-4 text-[#D0E153] hover:underline">
          Retour
        </Link>
      </div>
    </div>
  );
};

export default AddAdmin;