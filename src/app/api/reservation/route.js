import { verifyToken } from '@/middleware/admiMiddleware.js';
import connexion from '../../../../libs/connectiondb.js';
import RendezVous from '../../../models/reservation.js';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer'
import dotenv from 'dotenv';
dotenv.config();


export async function POST(request) {

    await connexion();
        try {
            const { fName, lName, email, phone, date, time, consultationType } = await request.json();

            const newRendezVous = await RendezVous.create({ fName, lName, email, phone, date, time, consultationType });
            
            sendReservationEmail(email, { fName, lName, phone, date, time, consultationType });
            
            return NextResponse.json({ message: "Rendez-vous créé avec succès", data: newRendezVous }, { status: 201 });
        } catch (error) {
            return NextResponse.json({ message: error.message }, { status: 400 });
        }
}

export async function GET(request) {
    try {
        await verifyToken(request);
    } catch (error) {
        return new Response(JSON.stringify({ message: error.message }), { status: error.status, headers: { 'Content-Type': 'application/json' } });
    }
    await connexion();
    try {
        const rendezvous = await RendezVous.find({});
        return NextResponse.json({ data: rendezvous }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 400 });
    }
}

function sendReservationEmail(email, { fName, lName, phone, date, time, consultationType }) {
    console.log(fName, lName, email, phone, date, time, consultationType);
    const text = `
    Cher(e) ${fName} ${lName},

    Nous vous écrivons pour confirmer votre rendez-vous prévu. Voici les détails de votre rendez-vous :

    - Type de consultation : ${consultationType}
    - Date : ${date}
    - Heure : ${time}
    - Nom : ${fName} ${lName}
    - Email : ${email}
    - Téléphone : ${phone}

    Nous sommes impatients de vous rencontrer et de discuter ensemble. Votre rendez-vous a été confirmé avec succès. Si vous avez besoin de modifier ou d'annuler ce rendez-vous, veuillez nous contacter dès que possible à notre adresse email ou numéro de téléphone.

    Merci de choisir notre service. Nous sommes dédiés à vous fournir le meilleur service possible.

    Cordialement,


    Massurance
    massurance55@gmail.com
    `;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Confirmation de rendez-vous',
        text: text,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
        } else {
            console.log('Email sent:', info.response);
        }
    });
}