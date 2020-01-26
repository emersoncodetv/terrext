const aws = require("../src/provider/aws")

test("get resource from provider", () => {
    console.log(aws.EC2)
    expect(aws.EC2.resource("instance")).toBe("instance")
})