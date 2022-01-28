exports.seed = function(knex, Promise) {
  return knex('users')
    .truncate()
    .then(function() {
      return knex('users').insert([
        { username: 'Mary', password: '12345'},
        { username: 'Jack', password: 'abc'},
        { username: 'Elon', password: 'abc123'},
        { username: 'Mike', password: '123abc'},
      ]);
    });
}; 