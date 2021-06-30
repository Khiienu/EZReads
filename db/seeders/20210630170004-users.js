'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Users', [{fullName: "Demo User", email: "demo@demo.com", hashedPassword: "$2a$04$z28s4WXnifKQYUvWBUolCOn0aUqfxZAxfGl.89CClwzrVx49MWfV"},
      {fullName: "User 2", email: "user2@email.com", hashedPassword: "$2a$04$z28s4WXnifKQYUvWBUolCOn0aUqfxZAxfGl.89CClwzrVx49MWfV"},
      {fullName: "Okay User", email: "sure@gmail.com", hashedPassword: "$2a$04$z28s4WXnifKQYUvWBUolCOn0aUqfxZAxfGl.89CClwzrVx49MWfV"},
      {fullName: "User 4", email: "user4@gmail.com", hashedPassword: "$2a$04$z28s4WXnifKQYUvWBUolCOn0aUqfxZAxfGl.89CClwzrVx49MWfV"},
      {fullName: "User 5", email: "user5@gmail.com", hashedPassword: "$2a$04$z28s4WXnifKQYUvWBUolCOn0aUqfxZAxfGl.89CClwzrVx49MWfV"},
      {fullName: "User 6", email: "user6@gmail.com", hashedPassword: "$2a$04$z28s4WXnifKQYUvWBUolCOn0aUqfxZAxfGl.89CClwzrVx49MWfV"},
      {fullName: "User 7", email: "user7@gmail.com", hashedPassword: "$2a$04$z28s4WXnifKQYUvWBUolCOn0aUqfxZAxfGl.89CClwzrVx49MWfV"},
      {fullName: "User 8", email: "user8@gmail.com", hashedPassword: "$2a$04$z28s4WXnifKQYUvWBUolCOn0aUqfxZAxfGl.89CClwzrVx49MWfV"},
      {fullName: "User 9", email: "user9@gmail.com", hashedPassword: "$2a$04$z28s4WXnifKQYUvWBUolCOn0aUqfxZAxfGl.89CClwzrVx49MWfV"},
      {fullName: "User 10", email: "user10@gmail.com", hashedPassword: "$2a$04$z28s4WXnifKQYUvWBUolCOn0aUqfxZAxfGl.89CClwzrVx49MWfV"},
      {fullName: "User 11", email: "user11@gmail.com", hashedPassword: "$2a$04$z28s4WXnifKQYUvWBUolCOn0aUqfxZAxfGl.89CClwzrVx49MWfV"},
      {fullName: "User 12", email: "user12@gmail.com", hashedPassword: "$2a$04$z28s4WXnifKQYUvWBUolCOn0aUqfxZAxfGl.89CClwzrVx49MWfV"},
      {fullName: "User 13", email: "user13@gmail.com", hashedPassword: "$2a$04$z28s4WXnifKQYUvWBUolCOn0aUqfxZAxfGl.89CClwzrVx49MWfV"},
      {fullName: "User 14", email: "user14@gmail.com", hashedPassword: "$2a$04$z28s4WXnifKQYUvWBUolCOn0aUqfxZAxfGl.89CClwzrVx49MWfV"},
      {fullName: "User 15", email: "user15@gmail.com", hashedPassword: "$2a$04$z28s4WXnifKQYUvWBUolCOn0aUqfxZAxfGl.89CClwzrVx49MWfV"},
      {fullName: "User 16", email: "user16@gmail.com", hashedPassword: "$2a$04$z28s4WXnifKQYUvWBUolCOn0aUqfxZAxfGl.89CClwzrVx49MWfV"},
      {fullName: "User 17", email: "user17@gmail.com", hashedPassword: "$2a$04$z28s4WXnifKQYUvWBUolCOn0aUqfxZAxfGl.89CClwzrVx49MWfV"},
      {fullName: "User 18", email: "user18@gmail.com", hashedPassword: "$2a$04$z28s4WXnifKQYUvWBUolCOn0aUqfxZAxfGl.89CClwzrVx49MWfV"},
      {fullName: "User 19", email: "user19@gmail.com", hashedPassword: "$2a$04$z28s4WXnifKQYUvWBUolCOn0aUqfxZAxfGl.89CClwzrVx49MWfV"},
      {fullName: "User 20", email: "user20@gmail.com", hashedPassword: "$2a$04$z28s4WXnifKQYUvWBUolCOn0aUqfxZAxfGl.89CClwzrVx49MWfV"},
      {fullName: "User 21", email: "user21@gmail.com", hashedPassword: "$2a$04$z28s4WXnifKQYUvWBUolCOn0aUqfxZAxfGl.89CClwzrVx49MWfV"},
      {fullName: "User 22", email: "user22@gmail.com", hashedPassword: "$2a$04$z28s4WXnifKQYUvWBUolCOn0aUqfxZAxfGl.89CClwzrVx49MWfV"},
      {fullName: "User 23", email: "user23@gmail.com", hashedPassword: "$2a$04$z28s4WXnifKQYUvWBUolCOn0aUqfxZAxfGl.89CClwzrVx49MWfV"},
      {fullName: "User 24", email: "user24@gmail.com", hashedPassword: "$2a$04$z28s4WXnifKQYUvWBUolCOn0aUqfxZAxfGl.89CClwzrVx49MWfV"},
      {fullName: "User 25", email: "user25@gmail.com", hashedPassword: "$2a$04$z28s4WXnifKQYUvWBUolCOn0aUqfxZAxfGl.89CClwzrVx49MWfV"},
      {fullName: "User 26", email: "user26@gmail.com", hashedPassword: "$2a$04$z28s4WXnifKQYUvWBUolCOn0aUqfxZAxfGl.89CClwzrVx49MWfV"},
      {fullName: "User 27", email: "user27@gmail.com", hashedPassword: "$2a$04$z28s4WXnifKQYUvWBUolCOn0aUqfxZAxfGl.89CClwzrVx49MWfV"},
      {fullName: "User 28", email: "user28@gmail.com", hashedPassword: "$2a$04$z28s4WXnifKQYUvWBUolCOn0aUqfxZAxfGl.89CClwzrVx49MWfV"}], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
