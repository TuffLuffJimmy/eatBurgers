class BurgerList {
  constructor() {
    this.burgers = []
    this.getBurgers = () => this.burgers
    this.getBurger = index => this.burgers[index]
    this.addBurger = newBurger => {
      this.burgers.push(newBurger)
    }
    this.updateBurger = text => {
      this.burgers.forEach(burger => {
        if (burger.name === text) {
          burger.isEaten = !burger.isEaten
        }
      })
    }
    this.deleteBurger = text => {
      this.burgers = this.burgers.filter(burger => {
        if (burger.name === text) {
          return false
        } else {
          return true
        }
      })
    }
  }
}

module.exports = BurgerList