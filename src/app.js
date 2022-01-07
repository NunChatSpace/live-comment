const express = require('express');
const cors = require('cors');
const router = require('./routes/handlers/root');

const app = express();

var corsOptions = {
    origin: 'http://localhost:3000',
    methods: [
        'GET',
        'POST',
        'HEAD',
        'PUT',
        'DELETE',
        'PATCH'
    ],
    allowedHeaders: [
        'Origin',
        'Content-Type',
        'Accept',
        'Content-Length',
        'Authorization',
        'access-control-allow-origin',
        'access-control-allow-headers',
        'access-control-allow-methods'
    ]
}

app.use(cors(corsOptions));
app.use(express.json());
router.init(app);

module.exports = app;