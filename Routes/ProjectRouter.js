const express = require('express');
const Projects = require('./ProjectModel.js');

const router = express.Router();

router.get('/', (req, res) => {
     Projects.find()
     .then(projects => {
         res.status(200).json(projects);
     })
     .catch(() => {
         res.status(500).json({error: "Can't find projects"});
     });
});

router.get('/:id', (req, res) => {
    Projects.findById(req.params.id)
    .then(project => {
        res.status(200).json(project)
    })
    .catch(() => {
        res.status(500).json({error: "Can't find project"});
    });
});

router.post('/', (req, res) => {
    const projectData = req.body

    Projects.add(projectData)
    .then(project => {
        res.status(201).json(project);
    })
    .catch(() => {
        res.status(500).json({message: "Failed to create new project"});
    });
});

module.exports = router;