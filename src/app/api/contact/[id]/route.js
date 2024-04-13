import connexion from '../../../../../libs/connectiondb';
import contact from '../../../../models/contact.js';
import { NextResponse } from "next/server";
import { verifyToken } from '@/middleware/admiMiddleware.js';


export async function DELETE(request, { params}) {
    try {

        await verifyToken(request);
        const { id } = params;
        await connexion();
        const deletedContact = await contact.findByIdAndDelete(id);
        if (!deletedContact) {
            return NextResponse.json({ message: "Contact non trouvé" }, { status: 404 });
        }
        return NextResponse.json({ message: "Contact supprimé avec succès" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 400 });
    }
}