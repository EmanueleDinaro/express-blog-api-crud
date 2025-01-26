const express = require('express')
const router = express.Router()

//INDEX
router.get('/', (req, res) => {
    res.send('Lista degli alimenti')
})

//SHOW
router.get('/:id', (req, res) => {
    res.send('Dettagli di un alimento')
})

//STORE
router.post('/', (req, res) => {
    res.send('Creazione di un nuovo alimento')
})

//UPDATE
router.put('/:id', (req, res) => {
    res.send('Modifica integrale di un alimento')
})

//MODIFY
router.patch('/:id', (req, res) => {
    res.send('Modifica parziale di un alimento')
})

//DELETE
router.delete('/:id', (req, res) => {
    res.send('Rimozione di un alimento')
})

module.exports = router