const aws_provider = require("../provider")
const resources = Object.freeze({"monday":1, "tuesday":2, "wednesday":3})

module.exports = aws_provider(resources)