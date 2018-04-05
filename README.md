# SimpleDB

A simple key-value store.


## Install

```
> npm install
```

## Testing

```
> npm test
```

## Usage

```
const Simpledb = require("./simpledb")



let myCol = Simpledb.open("test")

myCol.put("foo", "bar")
  .then(() => myCol.put("arr", [1,2,3]))
  .then(() => myCol.get("arr"))
  .then((info) => {
    console.log(info)
    // [ 1, 2, 3 ]
    return myCol.put("obj", { test: 123 })
  })
  .then(() => myCol.getAll())
  .then(info => {
    console.log(info)
    /*
    [ 
      { foo: 'bar' }, 
      { arr: [ 1, 2, 3 ] }, 
      { obj: { test: 123 } } 
    ]
    */
    return myCol.delete("obj")
  })
  .then(() => myCol.getAll())
  .then((info) => {
    console.log(info)
    /*
    [ 
      { foo: 'bar' }, 
      { arr: [ 1, 2, 3 ] } 
    ]
    */
    return myCol.deleteAll()
  })
  .then(() => myCol.getAll())
  .then((info) => {
    console.log(info)
    // []
  })
  .catch(err => console.log(err))


```



## Author
* **Stian Goplen**


