function test(directory, fileList) {
  this.fileList = fileList || [];
  this.directory = directory;
}

function accessValues() {
  console.log(this.directory);
}

test.prototype.accessValues = accessValues;

const a = new test("hola", "mundo");

a.accessValues();
