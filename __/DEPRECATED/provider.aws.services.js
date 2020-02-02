const EC2 = require("../src/provider/aws/services/EC2")

test("get resource from provider", () => {
    console.log(EC2)
    expect(EC2.resource("instance")).toBe("instance")
})