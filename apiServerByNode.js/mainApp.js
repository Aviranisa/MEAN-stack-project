const express = require('express');
const routers = require('./routers')
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
require('./configsDBconnection')

app.use('/api/users', routers)

app.listen(2000, () => {
    console.log('server is running');
});