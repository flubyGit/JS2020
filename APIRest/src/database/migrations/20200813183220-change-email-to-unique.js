module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('pupils', 'email',
      {
        type: Sequelize.STRING,
        allowNull: false,
        uique: true,
      });
  },

  down: () => { },
};
