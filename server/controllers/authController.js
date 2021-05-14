const bcrypt = require('bcryptjs')

module.exports = {
    register: async(req, res) => {
        const {username, email, password, isAdmin} = req.body;
        const db = req.app.get('db');
        const {session} = req;
        let user = await db.check_user({email});
        user = user[0];
        if(user){
            return res.status(400).send('User already exists')
        }
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        let newUser = await db.register({username, email, password: hash, isAdmin});
        newUser = newUser[0];
        delete newUser.password;
        session.user = newUser;
        res.status(201).send(session.user);
    },
    login: async(req, res) => {
        const {email, password} = req.body;
        const db = req.app.get('db');
        const {session} = req;
        let user = await db.check_user({email});
        user = user[0];
        if(!user){
            return res.status(400).send('Email not found')
        }
        const foundUser = bcrypt.compareSync(password, user.password);
        if(foundUser){
            delete user.password;
            session.user = user;
            res.send(session.user);
        } else {
            res.status(400).send('Incorrect password')
        }
    },
    logout: async(req, res) => {
        req.session.destroy();
        res.sendStatus(200);
    }
}