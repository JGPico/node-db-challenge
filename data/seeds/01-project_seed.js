
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: "Learn to Code",
         p_description: "Write stuff of a 'puter"},
        {name: "Make Lemonade",
         p_description: "Lemons in a bucket"},
        {name: "Profit",
         p_description: "Increase wealth"}
      ]);
    });
};
