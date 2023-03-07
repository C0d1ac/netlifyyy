const express = require('express');
const serverless = require('serverless-http');

const app = express();
const router = express.Router();
router.get('/', (req, res) => {
    res.json({
        'hello':'hi'
    });
});
router.get('/test', (req, res) => {
    res.sendFile('/platform tasks/netlifyyy/src/index.html');
});
app.use('/',router);
module.exports.handler = serverless(app);