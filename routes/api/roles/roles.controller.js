const Roles = require('./roles.scheme')

exports.findAll = (req, res, next) => {
    // const q = req.query;
    // let data = Roles;

    // if (q.id) data = Roles.filter(row => row.id == q.id)
    // if (q.id) data = Roles.filter(row => row.name == q.name)

    // res.json({ data });

    const q = req.query;
    const where = {}
    if(q.name) where['name'] = q.name;
    if(q.name_long) where['name_long'] = q.name_long;
    Roles.find(where)
    .limit(req.query.limit || 0)
    .skip(req.query.skip || 0)
    .then(roles => {
        res.json(roles);
    })
    .catch(err => next(err));
}

exports.findById = (req, res, next) => {
    const id = req.params.id
    // const data = Roles.filter (row => row.id == id);
    // res.json({id, data})

    Roles.findById(id)
    .then(roles => {
        res.json(roles);
    })
    .catch(err => next(err));
}

exports.insert = (req, res, next) => {
    const data = req.body;
    // Roles.push(data);
    // res.json({data: Roles})

    Roles.create(data)
    .then(roles => {
        res.json({
            message: `New Role Added!`,data: roles
        });
    })
    .catch(err => next(err));
}

exports.updateById = (req, res, next) => {
    const id = req.params.id
    // let data = Roles;
    // const index = Roles.findIndex(row => row.id == id)
    // if (req.body.name) data[index].name = req.body.name;
    // res.json({message: `${id} updated!`, data});

    const data = req.body
    Roles.findByIdAndUpdate(id, data)
    .then(roles => {
        res.json({
            message: `Roles ${id} updated!`,
        data: roles
        });
    })
    .catch(err => next(err));
}

exports.removeById = (req, res, next) => {
    const id = req.params.id
    // const index = Roles.findIndex(row => row.id == id)
    // Roles.splice(index, 1)
    // res.json({message: `${id} deleted`, data: Roles});

    Roles.findByIdAndRemove(id)
    .then(roles => {
        res.json({
            message: `Roles ${id} removed!`,
            data: roles
        });
    })
    .catch(err => next(err))
}

exports.remove = (req, res, next) => {
    Roles.remove()
    .then(roles => {
        res.json({
            message: 'All Roles Removed!',
            data : roles
        });
    })
    .catch(err => next(err))
}