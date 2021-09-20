
import config from './../config/config'
import app from "./express.js";
import mongoose from 'mongoose';

const PORT = 3000;

mongoose.Promise = global.Promise
mongoose.connect(config.mongoUri)

mongoose.connection.on('error', () => {
    throw new Error(`unable to connect to database: ${mongoUri}`)
})

app.listen(PORT, (err) => {
    if(err){
        console.log(err);
    }
    console.info('Server started on port %s.', config.port)
})