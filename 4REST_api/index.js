const express = require('express');
const connectMongoDb = require('./connection');

const { logReqRes } = require('./middlewares/index');

const useRouter = require('./routes/index');

const app = express();
const PORT = 8000;

connectMongoDb('mongodb://127.0.0.1:27017/demo-app-1');

app.use(express.urlencoded({ extended: false }));
app.use(logReqRes("log.txt")); 

app.use('/api/users', useRouter)

app.listen(PORT,() => {
    console.log(`server up and running on port ${PORT}`);
});