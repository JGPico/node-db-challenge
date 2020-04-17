const express = require('express');
const Resources = require('./ResourceModel.js');

const router = express.Router();

router.get('/', (req, res) => {
    Resources.find()
    .then(resources => {
        res.status(200).json(resources);
    })
    .catch(() => {
        res.status(500).json({error: "Can't find resources"});
    });
});

router.get('/:id', (req, res) => {
   Resources.findById(req.params.id)
   .then(resource => {
       res.status(200).json(resource)
   })
   .catch(() => {
       res.status(500).json({error: "Can't find resource"});
   });
});

router.post('/', (req, res) => {
   const resourceData = req.body

   Resources.add(resourceData)
   .then(resource => {
       res.status(201).json(resource);
   })
   .catch(() => {
       res.status(500).json({message: "Failed to create new resource"});
   });
});

module.exports = router;