const provider = require("../src/provider")


test('valitadion of uniqueness from deferent providers', () => {
    const aws_provider = provider.aws
    const oci_provider = provider.oci
    expect(oci_provider).not.toBe(aws_provider)
});

test('valitadion of uniqueness from same provider', () => {
    const aws_provider_1 = provider.aws
    const aws_provider_2 = provider.aws
    expect(aws_provider_1).toBe(aws_provider_2)
});

test("get resource from provider", () => {
    const aws = provider.aws
    console.log(aws.EC2)
    expect(aws.EC2.resource("instance")).toBe("instance")
})