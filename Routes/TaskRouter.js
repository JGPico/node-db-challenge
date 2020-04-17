const express = require('express');
const Tasks = require('./TaskModel.js');

const router = express.Router();

router.get('/', (req, res) => {
    Tasks.find()
    .then(tasks => {
        res.status(200).json(tasks);
    })
    .catch(() => {
        res.status(500).json({error: "Can't find tasks"});
    });
});

router.get('/:id', (req, res) => {
   Tasks.findTasksWithProject(req.params.id)
   .then(task => {
       res.status(200).json(task)
   })
   .catch(() => {
       res.status(500).json({error: "Can't find task"});
   });
});

router.post('/', (req, res) => {
   const taskData = req.body

   Tasks.add(taskData)
   .then(task => {
       res.status(201).json(task);
   })
   .catch(() => {
       res.status(500).json({message: "Failed to create new task"});
   });
});

module.exports = router;