var path = require('path');
var express = require('express')
var app = express();


app.get(/\/(modules\/.*)/, function(req, res) {
    console.log("Getting ", req.params[0])
    res.sendFile(path.resolve(__dirname, 'build', req.params[0]))
})

app.get(/^\/([A-Z].*$)/, function(req, res) {
    var rpath = req.params[0]
    if (!req.params[0]) {
        rpath = "index.html"
    }

    // All Keys should start with caps
    if (/^[A-Z]/.test(req.params[0])) {
        rpath = "index.html"
    }
    res.sendFile(path.resolve(__dirname, 'static', 'index.html'));
})

app.use(express.static('static'))

app.listen(8080, function() {
    console.log("listening")
})