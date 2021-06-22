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

// @route Get /notes
// @desc Get One Note
// @access Public
router.get('/:id', async (req, res) => {
    try {
        const note = await Note.findById(req.params.id);

        return res.status(200).json(note);
    }
    catch (e) {
        return res.status(400).json({ msg: e.message });
    }

    // Note.findById(req.params.id)
    // .then(note => res.json(note))
    // .catch(err => res.status(400).json('Error: ' + err));
});

// @route POST /notes
// @desc Create a Note
// @access Public
router.post('/', async (req, res) => {    
    const newNote = new Note({
        title: "",
        body: "",
        color: "yellow",
        parentID: req.body.parentID,
        x: req.body.x,
        y: req.body.y
    });

    try {
        await newNote.save();

        return res.status(200).json(newNote);
    }
    catch (e) {
        return res.status(400).json({ msg: e.message });
    }
});

// @route PUT /notes/title
// @desc Update a Note's title
// @access Public
router.route('/title/:id').put( async (req, res) => {
    try {
        const note = await Note.findById(req.params.id);

        note.title = req.body.title;
        
        await note.save();

        return res.status(200).json(note);
    }
    catch (e) {
        return res.status(400).json({ msg: e.message });
    }
});

// @route PUT /notes/body
// @desc Update a Note's body
// @access Public
router.route('/body/:id').put( async (req, res) => {
    try {
        const note = await Note.findById(req.params.id);

        note.body = req.body.body;
        
        await note.save();

        return res.status(200).json(note);
    }
    catch (e) {
        return res.status(400).json({ msg: e.message });
    }
});

// @route PUT /notes/move
// @desc Update a Note's position
// @access Public
router.route('/position/:id').put( async (req, res) => {
    try {
        const note = await Note.findById(req.params.id);

        note.x = req.body.x;
        note.y = req.body.y;

        await note.save();

        return res.status(200).json(note);
    }
    catch (e) {
        return res.status(400).json({ msg: e.message });
    }
});

// @route DELETE /notes/
// @desc Remove a Note
// @access Public
router.delete('/:id',  async (req, res) => {
    try {
        const note = await Note.findById(req.params.id);

        await note.remove();

        return res.status(200).json("Deleted Note");
    }
    catch (e) {
        return res.status(400).json({ msg: e.message });
    }
});

module.exports = router;