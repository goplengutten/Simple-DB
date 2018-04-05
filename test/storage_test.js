const assert = require("assert")
const fs = require("fs")
const path = require("path")
const Database = require("../simpledb")

describe("Testing the database", () => {
  let test = Database.open("test")
  
  it("check if put works", (done) => {
    test.put("foo", "bar")
      .then((info) => {
        fs.readFile("./simpledb/test", (err, res) => {
          res = JSON.parse(res)
          assert(res.foo === "bar")
          done()
        })
    })
  })
  
  it("check if get works", (done) => {
    test.put("foo2", "bar2")
      .then((res) => test.get("foo2"))
      .then((result) => {
        assert(result === "bar2")
        done()
    })
  })
  
  it("check if getAll works", (done) => {
   
    test.getAll()
      .then((result) => {
        assert(result[1].foo2 === "bar2")
        done()
    })
  })
  
  it("check if delete works", (done) => {
    test.delete("foo")
      .then(() => test.getAll())
      .then((result) => {
        assert(result[0].foo2 === "bar2")
        done()
    })
  })

  it("check if delete all works", (done) => {
    test.put("foo", "bar")
      .then((res) => test.deleteAll())
      .then((res) => test.getAll())
      .then((res) => {
        assert(typeof res === "object" && res.length === 0)
        done()
      })
  })
  /*
  */
})