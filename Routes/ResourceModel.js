const db = require("../data/db-config.js");

module.exports = {
    find,
    findById,
    add
}

function find() {
    return db('resources');
}

function findById(id) {
    return db('resources').where({id}).first()
}

function add(newResource) {
    return db('resources')
    .insert(newResource, "id")
    .then(([id]) => {
        return findById(id);
    });
}