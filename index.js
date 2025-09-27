//INSERT


const Sequelize = require('sequelize');

const sequelize = new Sequelize('database', 'username', 'password', {
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
        unique: true
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


Users.sync({ alter: true }).then((data) => {
    console.log("Users table created");
}).catch((err) => {
    console.log("Error");
})