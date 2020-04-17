const express = require('express');

const ProjectRouter = require('./Routes/ProjectRouter.js');

const server = express();

server.use(express.json());
server.use('/api/projects', ProjectRouter);

server.get("/", (req, res) => {
    res.status(200).json({Message: "API is up"});
});

module.exports = server;