const express = require('express');
const Projects = require('./ProjectModel.js');

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({Message: "trying to fetch api stuff, no database"});
});

module.exports = router;