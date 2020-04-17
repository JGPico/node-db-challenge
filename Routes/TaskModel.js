const db = require("../data/db-config.js");

module.exports = {
    find,
    findById,
    findTasksWithProject,
    add
}

function find() {
    return db('tasks as t')
    .join('projects as p', 'p.id', '=', 't.project_id')
    .select('t.id', 't.t_description', 't.notes', 'p.name as project', 'p.p_description')
}

function findById(id) {
    return db('tasks').where({id}).first()
}

function findTasksWithProject(id) {
    // select t.id, t.t_description, t.notes, p.name as project, p.p_description
    // from tasks as t
    // inner join projects as p on p.id = t.project_id;

    return db('tasks as t')
    .where({id})
    .join('projects as p', 'p.id', '=', 't.project_id')
    .select('t.id', 't.t_description', 't.notes', 'p.name as project', 'p.p_description');
}

function add(newTask) {
    return db('tasks')
    .insert(newTask, "id")
    .then(([id]) => {
        return findById(id);
    });
}