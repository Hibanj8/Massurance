// Importez les dépendances nécessaires
import admin from '../../../../models/admin';
import { NextResponse } from "next/server";
import connexion from '../../../../../libs/connectiondb.js';
import { verifySuperAdmin , verifyToken } from '@/middleware/admiMiddleware';


export async function GET(request , { params}) {
    try {
        await verifyToken(request);
    } catch (error) {
        return new Response(JSON.stringify({ message: error.message }), { status: error.status, headers: { 'Content-Type': 'application/json' } });
    }
    
    await connexion();

    const { id } = params;

    try {
        const existingadmin = await admin.findById(id);
        if (!existingadmin) {
            return new Response(JSON.stringify({ message: "Admin not found" }), { status: 404, headers: { 'Content-Type': 'application/json' } });
        } 
        return NextResponse.json({ message: existingadmin }, {status:200});

       

    } catch (error) {
        return new Response(JSON.stringify({ message: error.message }), { status: error.status, headers: { 'Content-Type': 'application/json' } });
    
    }
}

export async function DELETE(request , { params}) {
    try {
        await verifySuperAdmin(request);
    } catch (error) {
        return new Response(JSON.stringify({ message: error.message }), { status: error.status, headers: { 'Content-Type': 'application/json' } });
    }

    await connexion();

  
    const { id } = params;

    try {
        const deletedAdmin = await admin.findByIdAndDelete(id);
        if (!deletedAdmin) {
            return new Response(JSON.stringify({ message: "Admin not found" }), { status: 404, headers: { 'Content-Type': 'application/json' } });
        }
        return NextResponse.json({ message: "Admin deleted successfully" }, {status:200});
    } catch (error) {
        return new Response(JSON.stringify({ message: error.message }), { status: error.status, headers: { 'Content-Type': 'application/json' } });
    }
}

export async function PUT(request  ,  { params}) {
    try {
        await verifySuperAdmin(request);
    } catch (error) {
        return new Response(JSON.stringify({ message: error.message }), { status: error.status, headers: { 'Content-Type': 'application/json' } });
    }

    await connexion();


    const { id } = params;
    const { role } = await request.json();

    try {
        const updatedAdmin = await admin.findByIdAndUpdate(id, { role }, { new: true });
        if (!updatedAdmin) {
            return new Response(JSON.stringify({ message: "Admin not found" }), { status: 404, headers: { 'Content-Type': 'application/json' } });
        }
        return NextResponse.json({ message: updatedAdmin }, {status:200});
    } catch (error) {
        return new Response(JSON.stringify({ message: error.message }), { status: error.status, headers: { 'Content-Type': 'application/json' } });
    }
}