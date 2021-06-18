const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create Schema
const NoteSchema = new Schema({
    title: {
        type: String,
        required: false,
        default: ""
    },
    body: {
        type: String,
        required: false,
        default: ""
    },
    color: {
        type: String,
        required: false,
        default: "yellow"
    },
    parentID: {
        type: Number,
        required: false
    },
    x: {
        type: Number,
        required: false,
        minimum: 1,
        maximum: 2000
    },
    y: {
        type: Number,
        required: false,
        minimum: 1,
        maximum: 10000
    }
});

const Note = mongoose.model('note', NoteSchema);

module.exports = Note;