const literalObject = {
    a: function() {
        return this.b
    },
    b: 2
}


console.log(literalObject.a())