"use client"
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { setAdmin } from '../../store/admin/adminSlice.js';
import { useCookies } from 'react-cookie';

const handleRequestError = (error, setError) => {
    if (error.response && error.response.status === 400) {
        setError("Tous les champs sont requis");
    } else if (error.response && error.response.status === 401) {
        setError("Nom d'utilisateur ou mot de passe incorrect");
    } else {
        setError("Une erreur s'est produite lors de la connexion");
    }
};

const Page = () => {
    const [cookies, setCookies] = useCookies(["access_token"]);
    const router = useRouter();
    const dispatch = useDispatch();
    const [error, setError] = useState(null);
    const [values, setValues] = useState({ email: "", password: "" });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/api/admin/login', values);
            setCookies("access_token", response.data.token); // Specify the path for the cookie
            dispatch(setAdmin({ id: response.data.id }));
            router.push('/dashbordSuperAdmin/rendezVous');
        } catch (error) {
            handleRequestError(error, setError);
        }
    };
    return (
        <>
            <form>
                <div className="flex flex-col items-center justify-center px-6 py-8 mt-32 mb-8 mx-auto lg:py-0 ">
                    <div className="w-full bg-white rounded-lg shadow-md shadow-white border md:mt-0 sm:max-w-md xl:p-0">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <p className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                                Login
                            </p>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                                    Email
                                </label>
                                <input
                                    placeholder="email"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                                    id="email"
                                    type="text"
                                    value={values.email}
                                    onChange={(e) => setValues({ ...values, email: e.target.value })}
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
                                    Mot de pass
                                </label>
                                <input
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                                    placeholder="••••••••"
                                    id="password"
                                    type="password"
                                    value={values.password}
                                    onChange={(e) => setValues({ ...values, password: e.target.value })}
                                />
                            </div>
                            <div className="mt-2">
                                {error && <p className="text-red-500">{error}</p>}
                            </div>
                            <button
                                onClick={handleSubmit}
                                className="w-full bg-[#25416e] hover:bg-[#25416eab] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center focus:ring-blue-800 text-white"
                                type="submit"
                            >
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
};

export default Page;
