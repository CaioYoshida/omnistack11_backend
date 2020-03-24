const express = require('express');

const app = express();

// Setting the port of application
const port = 3333

app.get('/users', (request, response) => {
  response.json({
    event: 'Omnistack week 11.0',
    student: 'Caio Yoshida'
  });
})

app.listen(port, () => console.log(`App running on port ${port}`));
