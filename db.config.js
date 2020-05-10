const mongoose = require('mongoose')
const url = `mongodb://localhost:27017`
const debug = require('debug')(`blog:mongoose`)
let retry = 0;
const db = mongoose.connection
const options = {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true,
    dbName: 'blog',
    user: '',
    pass: '',
}

function onMongoError(err){
    if(err){
        const { name, errorLabels } = err;
        debug(`${name}: ${errorLabels}`)
        if(retry<3){
            retry+=1
            debug(`DB Connection Retrying: ${retry} attempt`)
            setTimeout(()=>{
                exports.connect()
            }, 3000)
        }
        if(retry==3){
            console.log('Mongoose Connection is Disconnected due to Failed to Connect 3 Times');
            mongoose.disconnect()
            process.exit(1)
        }
    } else {
        retry = 0
    }
}

db.once('open', () => debug('Database Connected'))

exports.url = url
exports.connect = ()=>{
    debug('Try Connection...')
    mongoose.connect(url, options, onMongoError);
}
exports.connection = mongoose.connection
exports.Schema = mongoose.Schema
exports.model = mongoose.model