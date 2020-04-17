const express = require('express');

const ProjectRouter = require('./Routes/ProjectRouter.js');
const ResourceRouter = require('./Routes/ResourceRouter.js');
const TaskRouter = require('./Routes/TaskRouter.js');

const server = express();

server.use(express.json());
server.use('/api/projects', ProjectRouter);
server.use('/api/resources', ResourceRouter);
server.use('/api/tasks', TaskRouter);

server.get("/", (req, res) => {
    res.status(200).json({Message: "API is up"});
});

module.exports = server;