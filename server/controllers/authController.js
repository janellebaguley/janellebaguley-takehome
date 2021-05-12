const bcrypt = require('bcryptjs');

module.exports = {
    register: async(req, res) => {
        const {username, email, password, profilePicture, isAdmin} = req.body;
        const db = req.app.get('db');
        const [foundUser] = await db.users.check_user({email});

        if(foundUser) {
            return res.status(400).send('Email already in use')
        }
        let salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)

        const [newUser] = await db.users.register_user({isAdmin, username, email, hash, profilePicture})
        const user = newUser[0]

        req.session.user = {isAdmin: user.is_admin, username: user.username, id: user.id}
        res.satatus(201).send(req.session.user)
    },
    login: async(req, res) => {
        const {email, password} = req.body;
        const db = req.app.get('db');
        const [foundUser] = await db.users.check_user({email})

        if(!foundUser){
            return res.status(400).send('Email not found.')
        }
        const authenticated = bcrypt.compareSync(password, foundUser.password)
        if(!authenticated){
            return res.status(401).send('Password is incorrect.')
        }
        delete foundUser.password
        req.session.user = {isAdmin: foundUser.is_admin, email: foundUser.email, id: foundUser.id}
        res.status(202).send(req.session.user)
    },
    updateUsername: (req,res) => {
        const {id} = req.params
        const {username} = req.body
        const db = req.app.get('db')

        db.users.update_username(username, id)
        .then(user => res.status(200).send(user))
        .catch(err => req.status(500).send(err))
    },
    logout: (req, res) => {
        req.session.destroy()
        res.sendStatus(200)
    }
}