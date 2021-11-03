module.exports = class {
  constructor(array) {
    const types = { boolean: {}, number: {}, string: {} },
      res = []

    const data = array.filter((item) => {
      const type = typeof item

      if (type in types)
        return types[type].hasOwnProperty(item)
          ? false
          : (types[type][item] = true)
      else return res.indexOf(item) >= 0 ? false : res.push(item)
    })

    this.data = data
    this.size = data.length
  }

  [Symbol.iterator]() {
    let index = -1
    const data = this.data

    return {
      next: () => ({ value: data[++index], done: !(index in data) })
    }
  }

  get [Symbol.toStringTag]() {
    return "^_^"
  }

  toString() {
    return "[object ^_^]"
  }

  *keys() {
    for (let i = 0; i < this.data.length; i++) yield this.data[i]
  }

  *values() {
    for (let i = 0; i < this.data.length; i++) yield this.data[i]
  }

  *entries() {
    for (let i = 0; i < this.data.length; i++)
      yield [this.data[i], this.data[i]]
  }

  clear() {
    this.data = []
    this.size = 0
  }

  add(item) {
    if (this.data.indexOf(item) === -1) this.data.push(item)
    return this
  }

  delete(item) {
    const index = this.data.indexOf(item)
    if (index !== -1) this.data.splice(index, 1)
  }

  has(item) {
    return this.data.indexOf(item) === -1 ? false : true
  }

  forEach(callback, context) {
    for (let i = 0; i < this.data.length; i++) {
      callback.call(context, this.data[i], i, this.data)
    }
  }
}
