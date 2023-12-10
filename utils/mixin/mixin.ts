export class Dog {
  name: string
  constructor(name: string) {
    this.name = name
  }
}

const animalBehaviors = {
  walk: () => console.log('Walking'),
  sleep: () => console.log('Sleep')
}

const dogBehaviors = {
  bark() {
    console.log('Woof!')
  },
  wagTail() {
    console.log('Wagging my tail!')
  },
  play() {
    console.log('Playing!')
  },
  // walk() {
  //   super.walk()
  // },
  // sleep() {
  //   super.sleep()
  // }
}

Object.assign(dogBehaviors, animalBehaviors)
Object.assign(Dog.prototype, dogBehaviors)
