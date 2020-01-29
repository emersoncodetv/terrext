const fs = require("fs");

fs.readFile(
  "./data-struncture-demo-1.json",
  { encoding: "utf-8" },
  (error, data) => {
    data = JSON.parse(data);

    const Test = function(obj) {
      this._obj = obj;


      return {
        getObj: () => {
            return this._obj;
          }
      };
    };

    const test2 = Test(data);

    console.log(test2.getObj());
    console.log(test2._obj);

  }
);


function HolaMundo(){
    this.hola = "Mundo"

    return {}
}

const a = new HolaMundo

console.log( a.hola)