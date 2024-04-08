import bcrypt from 'bcryptjs';
import Admin from '../../../../models/admin'
import { createToken } from "../../../../middleware/admiMiddleware.js";
import { NextResponse } from 'next/server';
import connexion from '../../../../../libs/connectiondb.js';

export async function POST(request) {
        await connexion()
        const { email, password } = await request.json();
        try {
            if (!password || !email) {
                return NextResponse.json({ message: "email or Password is not valid" }, {status:'400'});
            }
            const admin = await Admin.findOne({ email });
            const passwordIsValid = await bcrypt.compare(password, admin.password)
            if (!admin || !passwordIsValid) {
                return NextResponse.json({ message: "Email or password incorrect" }, {status:'401'});

            }

            const token = createToken(admin);
            return NextResponse.json({ token , id:admin._id}, {status:'200'});
            
        } catch (error) {
            console.error('Error logging in:', error);
            return NextResponse.json({ message: "Internal server error" }, {status:'500'});

        }

}
