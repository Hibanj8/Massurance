import Admin from '../models/admin.js';
import jwt from 'jsonwebtoken';
import {NextResponse} from "next/server";


const secretKey = process.env.JWT_SECRET;


export const createToken = (adminData) => {
    const token = jwt.sign({ id: adminData._id }, secretKey, { expiresIn: '1d' });
    return token;
};

export const verifyToken = async (request) => {
    return new Promise((resolve, reject) => {
        const tokenHeader = request.headers.get('authorization');
        if (!tokenHeader) {
            reject({ message: "Token missing", status: 401 });
            return;
        }

        const token = tokenHeader.split(' ')[1]; 
        jwt.verify(token, secretKey, (err, decoded) => {
            if (err) {
                reject({ message: "Invalid token", status: 401 });
            } else {
                resolve(decoded);
            }
        });
    });
};

export const verifySuperAdmin = async (request) => {
    return new Promise(async (resolve, reject) => {
        try {
            const decoded = await verifyToken(request);
            const adminData = await Admin.findById(decoded.id);

            if (!adminData || adminData.role !== 'superadmin') {
                reject({ message: 'Admin does not have permission', status: 403 });
            } else {
                resolve(decoded);
            }
        } catch (error) {
            console.error("Error during admin verification:", error.message);
            reject({ message: "Internal Server Error", status: 500 });
        }
    });
};
