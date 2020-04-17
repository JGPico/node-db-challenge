const db = require("../data/db-config.js");

module.exports = {
    find,
    findById,
    findTasksWithProject,
    add
}

function find() {
    return db('tasks');
}

function findById(id) {
    return db('tasks').where({id}).first()
}

function findTasksWithProject(id) {
    return db('tasks as t')
    //.join('projects as p', 't.project_id', '=', 'p.id')
    //.select('p.name', 't.id')
    //.select('t.id', 't.t_description', 't.notes', 't.completed', 'p.name as project_name', 'p.p_description as project_description')
    .where({id});
}

function add(newTask) {
    return db('tasks')
    .insert(newTask, "id")
    .then(([id]) => {
        return findById(id);
    });
}