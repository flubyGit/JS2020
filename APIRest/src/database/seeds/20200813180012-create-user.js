const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('users', [{
      name: 'John Doe',
      email: 'john@gmail.com',
      password_hash: await bcrypt.hash('123456', 8),
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      name: 'Patricia',
      email: 'paty@gmail.com',
      password_hash: await bcrypt.hash('424531aq', 8),
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      name: 'Cristiana',
      email: 'criszinha@gmail.com',
      password_hash: await bcrypt.hash('6466312a', 8),
      created_at: new Date(),
      updated_at: new Date(),
    },
    ], {});
  },

  down: () => { },
};
