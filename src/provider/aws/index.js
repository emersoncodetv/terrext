const aws_provider = require("../provider")
const resources = require("./services")

module.exports = aws_provider(resources)