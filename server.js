const express = require('express');
const sequelize = require('./config/connection');
const routes = require('./routes');

// Model
const Login = require('./model/Login');

const app = express();

const PORT = process.env.PORT || 3001;

// middleware
app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(routes);

sequelize.sync({force: false}).then(() => {
    app.listen(PORT, () => console.log(`App running on PORT ${PORT}`));
});