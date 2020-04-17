
exports.up = function(knex) {
  return (
      knex.schema
      .createTable('projects', tbl => {
          tbl.increments('id')
          tbl.string('name', 128)
          .notNullable()
          .index()
          tbl.string('p_description', 255)
          tbl.boolean('p_completed')
          .defaultTo(false)  
      })
      .createTable('resources', tbl => {
          tbl.increments('id')
          tbl.string('name', 128)
          .notNullable()
          .unique()
          tbl.string('r_description', 255)
      })
      .createTable('project_resources', tbl => {
          tbl.increments('id')
          tbl.integer('project_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('projects')
          .onDelete("CASCADE")
          .onUpdate("CASCADE")
          tbl.integer('resource_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('resources')
          .onDelete("CASCADE")
          .onUpdate("CASCADE")
      })
      .createTable('tasks', tbl => {
          tbl.increments('id')
          tbl.string('t_description', 255)
          .notNullable()
          tbl.string('notes', 255)
          tbl.boolean('t_completed')
          .defaultTo(false)
          tbl.integer('project_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('projects')
          .onDelete("CASCADE")
          .onUpdate("CASCADE")
      })
  )
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('tasks')
  .dropTableIfExists('project_resources')
  .dropTableIfExists('resources')
  .dropTableIfExists('projects')
};
