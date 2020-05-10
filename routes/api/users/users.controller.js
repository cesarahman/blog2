const Users = require('./users.scheme')
const passwordHash = require('password-hash');
const createError = require('http-errors')

exports.login = (username, password)=>{
    return new Promise((resolve, reject)=>{
        Users.findOne({ username })
        .select('_id password username role')
        .populate('role')
        .then((foundUser)=> {
            if(!foundUser) return reject(createError(400, 'Username Found!'))
            const hasshedPassword = foundUser.password
            const isValidPassword = passwordHash.verify(password, hasshedPassword)
            if(isValidPassword){
                resolve(foundUser)
            }else{
                reject(createError(400, 'Wrong Password!'))
            }
        })
    })
}

exports.findAll = (req, res, next) => {
    const q = req.query;
    const where = {}

    if(q.email) where['email'] = q.name;
    if(q.username) where['username'] = q.usename;
    if(q.displayName) where['displayName'] = q.displayName;

    Users.find(where)
    .limit(req.query.limit || 0)
    .skip(req.query.skip ||0)
    .populate('role')
    .then(users => {
        res.json(users);
    })
    .catch(err => next(err));
}

exports.findById = (req, res, next) =>{
    const id = req.params.id
    Users.findById(id)
    .populate('role')
    .then(users => {
        res.json(users);
    })
    .catch(err => next(err));
}

exports.insert = (req, res, next) => {
    let data = req.body;
    data.password = passwordHash.generate(data.password);
    Users.create(data)
    .then(users => {
        res.json({
            message: `New user added!`,
            data: users
        });
    })
    .catch(err => next(err))
}   

exports.updateById = (req, res, next) => {
    const id = req.params.id
    const data = req.body
    if(req.body.password) data.password =
    passwordHash.generate(req.body.password);

    Users.findByIdAndUpdate(id, data)
    .then(users => {
        res.json({
            message: `User ${id} Updated!`,
            data: users
        });
    })
    .catch(err => next(err))
}

exports.remove = (req, res, next) => {
    Users.remove()
    .then(users => {
        res.json({
            message: 'All Users Removed!',
            data: users
        });
    })
    .catch(err => next(err))
}

exports.remove = (req, res, next) => {
    Users.remove()
    .then(users => {
    res.json({
        message: 'All users removed!',
        data: users
    });
    })
    .catch(err => next(err))
}

exports.removeById = (req, res, next) => {
    const id = req.params.id
    Users.findByIdAndRemove(id)
    .then(users => {
        res.json({
            message: `User ${id} Removed!`,
            data: users
        });
    })
    .catch(err => next(err))
}