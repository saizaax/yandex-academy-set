## Custom `Set` implementation

### How to use

1. Clone repository

```
git clone https://github.com/xaazias/yandex-academy-set
cd yandex-academy-set
```

2. Copy `./solution/index.js` to your project directory
3. Import Set class with `const MySet = require("./solution/index")`
4. Initialize with `const set = new MySet([1, 2, 3, 3, 3])`

### Run tests

1. Clone repository

```
git clone https://github.com/xaazias/yandex-academy-set
cd yandex-academy-set
```

2. Install dependencies with `npm i`
3. Run Jest with `npm run test`

<br>

**Properties:**

- `size` — current size of set
- `data` — current set content

**Methods:**

- `entries()` — returns `[[0, 0], [1, 1], [2, 2]]` format `entries`
- `keys()` — returns `[0, 1, 2]` format `keys`
- `values()` — returns `[0, 1, 2]` format `values`
- `clear()` — clean all data from set
- `add()` — add item to set
- `delete()` — delete item from set
- `has()` — returns `Boolean` if element persists in set or not
- `toString()` - returns `[object ^_^]`

**Extra:**

- Works with `forEach` and `for-of` loops
- Unit tests made with Jest
