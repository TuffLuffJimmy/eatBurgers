const router = require('express').Router()
const Burger = require('../Burger.js')

const burgerList = new Burger()

router.get('/burgers', (req, res) => {
  let menu = burgerList.getBurgers()
  console.log(menu)
  res.json(menu)
})

// router.get('/burger/:id', (req, res) => {
  
// })

router.post('/burgers', (req, res) => {
  burgerList.addBurger(req.body)
  console.log(req.body)
  res.sendStatus(200)
})

router.put('/burgers/:text', (req, res) => {
  burgerList.updateBurger(req.params.text)
  res.sendStatus(200)
})

router.delete('/burgers/:id', (req, res) => {
  console.log(req.params.id)
  burgerList.deleteBurger(req.params.id)
  res.sendStatus(200)
})

module.exports = router