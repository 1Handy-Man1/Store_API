const { fstat } = require("fs")

app.get('/', function (req, res, next) {
    fstat.readFile('/file-does-not-exist', function (err, data) {
        if (err) {
            next(err) // Pass errors to Express
        } else {
            res.send(data)
        }
    })
})