import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        match: /^\S+@\S+\.\S+$/,
    },
    phone: {
        type: String,
        required: true,
        match: /^\d{10}$/,
    },
    message: {
        type: String,
        required: true,
    },
});

export default mongoose.models.Contact  || mongoose.model('Contact', contactSchema);
