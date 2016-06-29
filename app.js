var express = require('express');
var app = express()
var ops = {
  add: (n1, n2) => {
    return parseInt(n1) + parseInt(n2)
  },
  sub: (n1, n2) => {
    return parseInt(n1) - parseInt(n2)
  },
  div: (n1, n2) => {
    return parseInt(n1) / parseInt(n2)
  },
  mult: (n1, n2) => {
    return parseInt(n1) * parseInt(n2)
  }
}
app.get('/:op/:n1/:n2', (req, res) => {
  res.send("answer: " + ops[req.params.op](req.params.n1, req.params.n2) )
})
app.listen(8000, () => {
  console.log("listening on 8000");
})
