const express = require('express')
const cors = require('cors')
const server = express()

server.use(cors())

server.get(function(req, res, next) {
    console.log(`- METHOD: ${req.method}`)
    console.log(`- URL: ${req.originalUrl}`)
    next();
})

server.get('/', (req, res) => {
    res.send({ success: true, route: req.originalUrl })
})

server.get('/help', (req, res) => {
    res.send({ success: true, route: req.originalUrl })
})

server.listen(process.env.SERVER_API_PORT, () => {
    console.log(`Node Server Started. Try visiting http://localhost:${process.env.SERVER_API_PORT}/`)
});

