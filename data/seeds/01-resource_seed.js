
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {name: "Computer",
         r_description: "Calculates stuff"},
        {name: "Lemon",
         r_description: "A tasty fruit"},
        {name: "Time",
         r_description: "The world depends upon it"}
      ]);
    });
};