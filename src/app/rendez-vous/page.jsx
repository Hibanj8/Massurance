"use client"
import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { addReservation } from '../../store/reservation/ReservationThunks.js';

function RendezVousForm() {
    const getCurrentDate = () => {
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, '0');
        const day = String(currentDate.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };
    const availableTimes = [];
    for (let i = 8; i <= 23; i++) {
        const hour = String(i).padStart(2, '0');
        availableTimes.push(`${hour}:00`);
    }
    const dispatch = useDispatch();
    const [reservationData, setReservationData] = useState({
        fName: "",
        lName: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        consultationType: "",
    });

    const handleSubmit = (e) => {
        console.log(reservationData);
        e.preventDefault();
        dispatch(addReservation(reservationData));
        setReservationData({
            fName: "",
            lName: "",
            email: "",
            phone: "",
            date: "",
            time: "",
            consultationType: ""
        });
    };

    return (
        <div className='relative pb-[110px] pt-[120px] lg:pt-[120px] mx-auto mb-[60px] max-w-[510px] '>
            <span className="text-[#D0E153] mb-2 block text-lg font-semibold text-center">
                Prenez votre rendez-vous
            </span>
            <h1 className='text-white mb-3 text-3xl leading-[1.208] font-bold sm:text-4xl md:text-[40px] text-center'>Rendez-vous</h1>
            <p className="text-body-color text-base text-white text-center justify-center items-center">
                Merci de remplir le formulaire et de patienter pour recevoir votre lien Zoom pour une consultation en ligne, ou les détails pour une consultation en personne.
            </p>
            <div className="flex items-center justify-center p-12 ">
                <div className="relative rounded-lg bg-white p-8 shadow-lg dark:bg-dark-2 sm:p-12 max-w-[550px]">
                    <form onSubmit={handleSubmit} action="https://formbold.com/s/FORM_ID" method="POST">
                        <div className="-mx-3 flex flex-wrap">
                            <div className="w-full px-3 sm:w-1/2">
                                <div className="mb-5">
                                    <label
                                        htmlFor="fName"
                                        className="mb-3 block text-base font-medium text-black"
                                    >
                                        Prénom
                                    </label>
                                    <input
                                        type="text"
                                        name="fName"
                                        id="fName"
                                        placeholder="Votre prénom"
                                        value={reservationData.fName}
                                        onChange={(e) => setReservationData({ ...reservationData, fName: e.target.value })}

                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                </div>
                            </div>
                            <div className="w-full px-3 sm:w-1/2">
                                <div className="mb-5">
                                    <label
                                        htmlFor="lName"
                                        className="mb-3 block text-base font-medium text-black"
                                    >
                                        Nom
                                    </label>
                                    <input
                                        type="text"
                                        name="lName"
                                        id="lName"
                                        placeholder="Votre nom"
                                        value={reservationData.lName}
                                        onChange={(e) => setReservationData({ ...reservationData, lName: e.target.value })}

                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="mb-5">
                            <label
                                htmlFor="email"
                                className="mb-3 block text-base font-medium text-black"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Votre email"
                                value={reservationData.email}
                                onChange={(e) => setReservationData({ ...reservationData, email: e.target.value })}

                                className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>
                        <div className="mb-5">
                            <label
                                htmlFor="phone"
                                className="mb-3 block text-base font-medium text-black"
                            >
                                Téléphone
                            </label>
                            <input
                                type="tel"
                                name="phone"
                                id="phone"
                                placeholder="Votre numéro"
                                value={reservationData.phone}
                                onChange={(e) => setReservationData({ ...reservationData, phone: e.target.value })}

                                className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>

                        <div className="-mx-3 flex flex-wrap">
                            <div className="w-full px-3 sm:w-1/2">
                                <div className="mb-5">
                                    <label
                                        htmlFor="date"
                                        className="mb-3 block text-base font-medium text-black"
                                    >
                                        Date
                                    </label>
                                    <input
                                        type="date"
                                        name="date"
                                        min={getCurrentDate()}
                                        id="date"
                                        value={reservationData.date}
                                        onChange={(e) => setReservationData({ ...reservationData, date: e.target.value })}

                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                </div>
                            </div>
                            <div className="w-full px-3 sm:w-1/2">
                                <div className="mb-5">
                                    <label
                                        htmlFor="time"
                                        className="mb-3 block text-base font-medium text-black"
                                    >
                                        Temps
                                    </label>
                                    <select
                                        className="block w-full rounded-md  border border-[#e0e0e0] bg-white py-3 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#576ce1] focus:shadow-md "
                                        id="time"
                                        value={reservationData.time}
                                        onChange={(e) => setReservationData({ ...reservationData, time: e.target.value })}
                                    >
                                        {availableTimes.map(time => (
                                            <option className='' key={time} value={time}>{time}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="mb-5">
                            <label className="mb-3 block text-base font-medium text-black">
                                Voulez-vous une consultation ?
                            </label>
                            <div className="flex items-center space-x-6">
                                <div className="flex items-center">
                                    <input
                                        type="radio"
                                        name="service"
                                        id="radioButton1"
                                        value="En ligne" // Valeur explicite pour le choix "En ligne"
                                        checked={reservationData.consultationType === "En ligne"} // Contrôle si ce bouton doit être sélectionné
                                        onChange={(e) => setReservationData({ ...reservationData, consultationType: e.target.value })}
                                        className="h-5 w-5"
                                    />
                                    <label htmlFor="radioButton1" className="pl-3 text-base font-medium text-black text-nowrap">
                                        En ligne
                                    </label>
                                </div>
                                <div className="flex items-center">
                                    <input
                                        type="radio"
                                        name="service"
                                        id="radioButton2"
                                        value="Présentiel" // Valeur explicite pour le choix "Présentiel"
                                        checked={reservationData.consultationType === "Présentiel"} // Contrôle si ce bouton doit être sélectionné
                                        onChange={(e) => setReservationData({ ...reservationData, consultationType: e.target.value })}
                                        className="h-5 w-5"
                                    />
                                    <label htmlFor="radioButton2" className="pl-3 text-base font-medium text-black">
                                        Présentiel
                                    </label>
                                </div>
                            </div>
                            <br/>
                            <div>
                                <button
                                    type="submit"
                                    className="hover:shadow-form rounded-md bg-[#D0E153] py-3 px-8 text-center text-base font-semibold text-black outline-none"
                                >
                                    Envoyer
                                </button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
}

export default RendezVousForm;
