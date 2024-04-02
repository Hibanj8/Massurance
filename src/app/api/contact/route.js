import connexion from '../../../../libs/connectiondb.js';
import Contact from '../../../models/contact.js';
import {NextResponse} from "next/server";
import { verifyToken } from '@/middleware/admiMiddleware.js';


export async function POST(request) {
    await connexion();
    try {
        const { name, email, phone, message } = await request.json();
        await Contact.create({ name, email, phone, message });
        return NextResponse.json({ message: "Contact créé avec succès" }, {status:201});
    } catch (error) {
        return NextResponse.json({ message: error.message },{status:400});
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
        const contacts = await Contact.find();
        return NextResponse.json({ message: contacts }, {status:200});
    } catch (error) {
        return NextResponse.json({ message: error.message } , {status:400});
    }
}
