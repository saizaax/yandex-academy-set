const MySet = require("../solution/index")

describe("Set implementation testing", () => {
  const set = new MySet([4, 8, 15, 15, 16, 23, 42])

  const object = {
    getValue() {
      return this.value
    },
  }

  const data = {
    value: 42,
  }

  it("Хранит только уникальные значения", () => {
    expect([...set].toString()).toBe([4, 8, 15, 16, 23, 42].toString())
  })

  it("Есть свойство size", () => {
    expect(set.size).toBe(6)
  })

  it("Работает в цикле for-of", () => {
    const temp = []

    for (const item of set) {
      temp.push(item)
    }

    expect(temp.toString()).toBe([...set].toString())
  })

  it("Есть метод entries", () => {
    const temp = []

    for (const item of set.entries()) {
      temp.push(item)
    }

    expect(temp.toString()).toBe(
      [...set].map((item) => [item, item]).toString()
    )
  })

  it("Есть метод values", () => {
    const temp = []

    for (const item of set.values()) {
      temp.push(item)
    }

    expect(temp.toString()).toBe([...set].toString())
  })

  it("Есть метод keys", () => {
    const temp = []

    for (const item of set.keys()) {
      temp.push(item)
    }

    expect(temp.toString()).toBe([...set].toString())
  })

  it("Есть метод clear", () => {
    set.clear()
    expect(set.size).toBe(0)
  })

  it("Есть метод add", () => {
    set.add(1337)
    expect([...set].indexOf(1337)).not.toBe(-1)
  })

  it("Метод add может работать в цепочке вызовов", () => {
    set.delete(1337)
    set.add(1337).add(1337).add(1337)
    expect([...set].indexOf(1337)).not.toBe(-1)
  })

  it("Есть метод delete", () => {
    set.delete(1337)
    expect([...set].indexOf(666)).toBe(-1)
  })

  it("Есть метод has", () => {
    set.add(object)

    expect(set.has({})).toBe(false)
    expect(set.has(object)).toBe(true)
    expect(set.has(data)).toBe(false)
  })

  it("При строгом сравнении объект класса равен valueOf", () => {
    expect(set === set.valueOf()).toBe(true)
  })

  it("Приведение к типу String возвращает [object ^_^]", () => {
    expect(String(set)).toBe("[object ^_^]")
  })

  it("Метод toString возвращает [object ^_^]", () => {
    expect(Object.prototype.toString.call(set)).toBe("[object ^_^]")
  })

  it("Есть метод forEach", () => {
    const temp = []

    set.forEach(function (item) {
      temp.push(item.getValue.call(this))
    }, data)

    expect(temp.toString()).toBe([data.value].toString())
  })
})
