import admin from '../../../../models/admin';
import bcrypt from 'bcryptjs';
import {NextResponse} from "next/server";
import connexion from '../../../../../libs/connectiondb.js';
import { verifyToken } from '@/middleware/admiMiddleware';

export async function  POST(request) {
    try {
        await verifyToken(request);
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
        return NextResponse.json({ message: "Internal server error" }, {status:'500'});
    }
}
