const express = require("express");
const router = express.Router();

// Note Model
const Note = require('../models/note');

// @route   Get api/notes
// @ desc   Get all notes
// @ access Public
router.get('/', async (req, res) => {
    try {
        const notes = await Note.find();

        return res.status(200).json(notes);
    }
    catch (e) {
        return res.status(400).json({ msg: e.message });
    }
});

module.exports = router;