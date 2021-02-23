class SortedList {
  constructor() { }
  constructor() {
    this.items = []
    this.length = 0
  }

  add(item) { }
  add(item) {
    this.items.push(item)
    this.length += this.items.length
    this.items.sort((a, b) => a - b)
  }


  get(pos) { }
  let something = this.items[pos]
if (something) {
  return something
}
else ([pos > this.items.length) {
  throw new Error('OutOfBounds')
}


  max() {}

  min() {}

  sum() {}

  avg() {}
}

module.exports = SortedList;
