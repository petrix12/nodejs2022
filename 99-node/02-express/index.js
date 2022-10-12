const express = require('express')
const Services = require('./src/service')

const app = express()
const PORT = 8083
app.use(express.json())

app.get('/', (req, res) => {
    res.json({
        message: "Lista de usuarios",
        body: Services.getUsers()
    })
})

app.get('/:id', (req, res) => {
    let { params: {id} } = req
    console.log(id)
    let user = Services.getUser(id)
    res.json({
        message: `Usuario ${id}`,
        body: user
    })
})

app.post('/', (req, res) => {
    let { body: newUser} = req
    let user = Services.createUser(newUser)
    res.status(201).json({
        message: 'Usuario creado',
        body: user
    })
})

app.put('/:id', (req, res) => {
    // pendiente
})

app.delete('/:id', (req, res) => {
    // pendiente
})

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`)
})