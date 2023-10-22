const express = require('express');
const app = express();
const port = process.env.port || 4321;

app.use('/', require('./routes/redir'));

app.listen(port, console.log(`Server started on port ${port}...`));