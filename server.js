const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000
const startBot = require('./index.js')

app.get('/', (req, res) => {
    res.send('bot running..,')
})

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
    startBot()
})
