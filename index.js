const express = require('express')
const server = express()
const albumns = require('/Users/kenne/lab/simpleNodeJsApi/BobDylanDiscography.json')


server.get('/bob-dylan/albumns', (req, res) => {
    return res.json(albumns)
})

server.listen(3000, () => {
    console.log("Servidor está funcionando")
})