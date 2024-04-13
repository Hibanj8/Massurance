import { verifyToken } from '@/middleware/admiMiddleware.js';
import connexion from '../../../../../libs/connectiondb.js';
import RendezVous from '@/models/RendezVous';
import { NextResponse } from 'next/server';

export async function GET(request , { params}) {
    try {
        await verifyToken(request);
    } catch (error) {
        return new Response(JSON.stringify({ message: error.message }), { status: error.status, headers: { 'Content-Type': 'application/json' } });
    }
    const { id } = params;
    await connexion();
    try {
        const rendezvous = await RendezVous.findById(id);
        if (!rendezvous) {
            return NextResponse.json({ message: "Rendez-vous non trouvé" }, { status: 404 });
        }
        return NextResponse.json({ data: rendezvous }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 400 });
    }
}

export async function PUT(request) {
    try {
        await verifyToken(request);
    } catch (error) {
        return new Response(JSON.stringify({ message: error.message }), { status: error.status, headers: { 'Content-Type': 'application/json' } });
    }
    const { id } = request.nextUrl.query;
    await connexion();
    try {
        const data = await request.json();
        const updatedRendezVous = await RendezVous.findByIdAndUpdate(id, data, { new: true });
        if (!updatedRendezVous) {
            return NextResponse.json({ message: "Rendez-vous non trouvé" }, { status: 404 });
        }
        return NextResponse.json({ message: "Rendez-vous mis à jour avec succès", data: updatedRendezVous }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 400 });
    }
}

export async function DELETE(request , { params}) {
    try {
        await verifyToken(request);
    } catch (error) {
        return new Response(JSON.stringify({ message: error.message }), { status: error.status, headers: { 'Content-Type': 'application/json' } });
    }
    const { id } = params;
    await connexion();
    try {
        const deletedRendezVous = await RendezVous.findByIdAndDelete(id);
        if (!deletedRendezVous) {
            return NextResponse.json({ message: "Rendez-vous non trouvé" }, { status: 404 });
        }
        return NextResponse.json({ message: "Rendez-vous supprimé avec succès" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 400 });
    }
}
