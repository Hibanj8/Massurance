import admin from '../../../models/admin';
import bcrypt from 'bcryptjs';
import {NextResponse} from "next/server";
import connexion from '../../../../libs/connectiondb';
import { verifySuperAdmin } from '@/middleware/admiMiddleware';

export async function  POST(request) {
    try {
        await verifySuperAdmin(request);
    } catch (error) {
        return new Response(JSON.stringify({ message: error.message }), { status: error.status, headers: { 'Content-Type': 'application/json' } });
    }

    await connexion();
    const { name, email, password,role } = await request.json();

    try {
        const existingadmin = await admin.findOne({ email });
        if (existingadmin) {
            return NextResponse.json({ message: "Admin already exists" }, {status:'400'});
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        const newadmin = new admin({ name, email, password: hashedPassword , role });
        await newadmin.save();
        return NextResponse.json({ message: "Admin created successfully" }, {status:'201'});

    } catch (error) {
        console.error('Error creating admin:', error);
        return new Response(JSON.stringify({ message: error.message }), { status: error.status, headers: { 'Content-Type': 'application/json' } });
    }
}

export async function GET(request) {
    try {
        await verifySuperAdmin(request);
    } catch (error) {
        return new Response(JSON.stringify({ message: error.message }), { status: error.status, headers: { 'Content-Type': 'application/json' } });
    }
    
    await connexion();

    try {
        const existingadmin = await admin.find();
        if (!existingadmin) {
            return new Response(JSON.stringify({ message: "Admin not found" }), { status: 404, headers: { 'Content-Type': 'application/json' } });
        } 
        return NextResponse.json({ message: existingadmin }, {status:200});

       

    } catch (error) {
        return new Response(JSON.stringify({ message: error.message }), { status: error.status, headers: { 'Content-Type': 'application/json' } });
    
    }
}