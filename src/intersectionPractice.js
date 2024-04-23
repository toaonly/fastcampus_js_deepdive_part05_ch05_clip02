function extend(target, src) {
  Object.entries(src).forEach(([key, val]) => {
    target[key] = val
  })

  return target
}

const movable = {
  move() {
    console.log('움직였다!')
  },

  stop() {
    console.log('멈췄다!')
  },
}

const conversable = {
  speak() {
    console.log('말한다!')
  },

  hear() {
    console.log('듣는다!')
  },
}

const jumpable = {
  jump() {
    console.log('점프한다!')
  },
}

function createAnimal(name) {
  const creature = { name }

  return extend(extend(creature, movable), jumpable)
}

function createPerson(name) {
  const creature = { name }

  return extend(extend(extend(creature, movable), jumpable), conversable)
}

const chihuahua = createAnimal('치와와')
const person = createPerson('철수')

chihuahua.move()
chihuahua.jump()
chihuahua.stop()

person.move()
person.jump()
person.stop()
person.speak()
person.hear()
