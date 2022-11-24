const express = require('express');
const cors = require('cors');
const app = express();

require('dotenv').config({
    path: './.env'
});

(async () => {
    const database = require('./src/Infrastructure/db');

    try {
        const result = await database.sync();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
})();

app.use(cors());
app.use(express.json());
app.listen(process.env.APP_PORT);

require('./src/Routes/index')(app);