var express = require('express')
var app = express()
app.use('/site', express.static('public'))


// app.get('/', function (req, res) {
//   res.send('Hello World!')
// })
var port = process.env.PORT || 8081;
app.listen(port, function () {
  console.log('Example app listening on port 8081!')
})
