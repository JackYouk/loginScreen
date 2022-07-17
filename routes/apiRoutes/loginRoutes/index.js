const router = require('express').Router();
const Login = require('../../../model/Login');

router.get('/', async (req, res) => {
    try {
        const logins = await Login.findAll();
        console.log(logins);
        res.json(logins);
    } catch (error) {
        res.status(500).json({error});
    }
})


router.post('/', async (req, res) => {
    const {username, password} = req.body;
    try {
        const newLogin = await Login.create({
            username,
            password,
        });
        console.log(newLogin);
        res.json(newLogin);
    } catch (error) {
        res.status(500).json({error});
    }
})

module.exports = router;