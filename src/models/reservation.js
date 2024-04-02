import mongoose from "mongoose";

const RendezVousSchema = new mongoose.Schema({
    fName: {
        type: String,
        required: true,
    },
    lName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /^\S+@\S+\.\S+$/,
    },
    phone: {
        type: String,
        required: true,
        unique: true,
        match: /^\d{10}$/,
    },
    date: {
        type: Date,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    consultationType: {
        type: String,
        enum: ['En ligne', 'Présentiel'],
        required: true,
    },
});

export default mongoose.models.RendezVous || mongoose.model('RendezVous', RendezVousSchema);
