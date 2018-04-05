const assert = require("assert")
const fs = require("fs")
const path = require("path")

after((done) => {
  if(fs.existsSync("./simpledb")){
    fs.readdir("./simpledb", (err, files) => {
      for (const file of files) {
        fs.unlinkSync(path.join("./simpledb", file))
      }
      fs.rmdirSync("./simpledb")
      done()
    })
  }else{
    done()
  }
})







