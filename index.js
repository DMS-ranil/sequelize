//Create Table

const Sequelize = require('sequelize');

const sequelize = new Sequelize('travel.lk', 'root', 'ceybaseitsql', {
    dialect: 'mysql'
});

// async function myFunction() {
//     await sequelize.authenticate();
//     console.log("Connection Success");
// }


const Users = sequelize.define('users', {
    user_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    password: {
        type: Sequelize.STRING,
    },
    age: {
        type: Sequelize.INTEGER,
        defaultValue: 13
    }
},{
    freezeTableName: true,
    timestaps: false,
});


// Users.sync({ alter: true }).then((data) => {
//     console.log("Users table created");
// }).catch((err) => {
//     console.log("Error");
// })






//Drop Table

// sequelize.drop({ match: /_test$/ }).then(() => {
//     console.log("All tables dropped");
// }).catch((err) => {
//     console.log("Error dropping tables");
// });




//Insert Data

// Users.sync({ alter: true }).then((data) => {

//     const user_data = { uname: "admin", pwd: "admin123", a: 30 };
//     const user = Users.build({ username: user_data.uname, password: user_data.pwd, age: user_data.a});

//     return user.save();

// }).then((data) => {
//     console.log(data.toJson());
//     console.log("User created");
//     user_name.username = newdata;
// }).then((data) => {
//     console.log("Username updated");
//     console.log(data.toJson());
// }).catch((err) => {
//     console.log(err);
// });





//Update Data

// async function updateUsername(userId, newUsername) {
//   try {
//     await Users.update(
//       { username: newUsername },
//       { where: { user_id: userId } }
//     );
//     console.log('Username updated successfully');

//   } catch (err) {
//     console.error('Error updating username:', err);
//   }
// }

// updateUsername(1, 'newuser1');


//Delete Data

// async function deleteUser(userId) {
//   try {
//     const deletedCount = await Users.destroy({
//       where: { user_id: userId }
//     });

//     if (deletedCount > 0) {
//       console.log('User deleted successfully');
//     } else {
//       console.log('No user found with that ID');
//     }

//   } catch (err) {
//     console.error('Error deleting user:', err);
//   }
// }

// deleteUser(1);





// Select Method 1


async function getAllUsers() {
  try {
    const users = await Users.findAll(); // SELECT * FROM users;
    console.log('All users:', JSON.stringify(users, null, 2));
  } catch (err) {
    console.error('Error fetching users:', err);
  }
}

getAllUsers();




// Select Method 2


// async function getUserById(userId) {
//   try {
//     const user = await Users.findByPk(userId); // SELECT * FROM users WHERE user_id = ?
//     if (user) {
//       console.log('User found:', user.toJSON());
//     } else {
//       console.log('No user found with that ID');
//     }
//   } catch (err) {
//     console.error('Error fetching user:', err);
//   }
// }

// getUserById(2);





// Select Method 3

// async function getUserByName(us) {
//   try {
//     const user = await Users.findOne({
//         where: {
//             username: us
//         },
//     }); // SELECT * FROM users WHERE username = ?
//     if (user) {
//       console.log('User found:', user);
//     } else {
//       console.log('No user found with that Name');
//     }
//   } catch (err) {
//     console.error('Error fetching user:', err);
//   }
// }

// getUserByName("dmsmenula");