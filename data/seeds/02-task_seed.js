
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {t_description: "Study",
         notes: "Calculates stuff",
         project_id: 1},
        {t_description: "Squeeze",
         notes: "Get dat lemon juice",
         project_id: 2},
        {t_description: "Earn money",
         notes: "Blessed are the money makers",
         project_id: 3}
      ]);
    });
};