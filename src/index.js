const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

// Setting the port of application
const port = 3333

app.listen(port, () => console.log(`App running on port ${port}`));
