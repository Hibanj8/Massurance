"use client"
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchReservations, deleteReservation  } from '../../../store/reservation/ReservationThunks.js'; 


function RendezVous() {
    const dispatch = useDispatch();
    const reservations = useSelector((state) => state.reservation.reservations);
    const loading = useSelector((state) => state.reservation.loading);

    useEffect(() => {
        dispatch(fetchReservations());
    }, [dispatch]);

    const handleDelete = (id) => {
        dispatch(deleteReservation(id)) 
        .then(() => {
            dispatch(fetchReservations());
        })

    };

    return (
        <div className="text-gray-900">
            <div className="p-4 flex">
                <h1 className="mt-14 font-bold text-4xl text-left pb-9 sm:p-2">Rendez-vous</h1>
            </div>
            <section className="container mx-auto p-6 font-mono">
                <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
                    <div className="w-full overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                                    <th className="px-4 py-3">Nom et Prénom</th>
                                    <th className="px-4 py-3">Téléphone</th>
                                    <th className="px-4 py-3">Email</th>
                                    <th className="px-4 py-3">Type de consultation</th>
                                    <th className="px-4 py-3">Date</th>
                                    <th className="px-4 py-3">Heure</th>
                                    <th className="px-4 py-3"></th>
                                </tr>
                            </thead>
                            <tbody className="bg-white">
                                {loading ? ( 
                                    <tr>
                                        <td colSpan="7" className="px-4 py-3 text-gray-700">Chargement en cours...</td>
                                    </tr>
                                ) : (
                                    reservations.slice().reverse().map((reservation) => (
                                        <tr key={reservation._id} className="text-gray-700">
                                            <td className="px-4 py-3 text-ms font-semibold border">{reservation.fName} {reservation.lName}</td>
                                            <td className="px-4 py-3 text-ms font-semibold border">{reservation.phone}</td>
                                            <td className="px-4 py-3 text-ms font-semibold border">{reservation.email}</td>
                                            <td className="px-4 py-3 text-sm border">{reservation.consultationType}</td>
                                            <td className="px-4 py-3 text-sm border">{reservation.date}</td>
                                            <td className="px-4 py-3 text-sm border">{reservation.time}</td>
                                            <td className="px-4 py-3 text-sm border">
                                                <button
                                                    className="inline-flex items-center pl-2 py-2 bg-red-600 transition ease-in-out delay-75 hover:bg-red-700 text-white text-sm font-medium rounded-md hover:-translate-y-1 hover:scale-110"
                                                    onClick={() => handleDelete(reservation._id)}
                                                >
                                                    <svg
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        className="h-4 w-4 mr-2"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                                            strokeWidth="2"
                                                            strokeLinejoin="round"
                                                            strokeLinecap="round"
                                                        ></path>
                                                    </svg>
                                                    
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default RendezVous;