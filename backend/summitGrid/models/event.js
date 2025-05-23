const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    about: {
        type: String,
        required: false,
    },
    status: {
        type: String,
        enum: ['Paid', 'Free', 'Pending'],
        default: 'Pending',
        required: true,
    },
    statusComment: {
        type: String,
        required: false,
    },
    tags: {
        type: [String],
        required: false,
    },
    price: {
        type: String,
        required: false,
    },
    organizer: {
        type: String,
        required: false,
    },
    website: {
        type: String,
        required: false,
    },
   image: {
        data: Buffer,
        contentType: String
    },
    time: {
        type: String,
        required: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
}, { timestamps: true });

module.exports = mongoose.model('Event', eventSchema);
  