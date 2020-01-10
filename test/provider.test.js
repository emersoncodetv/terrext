const provider = require("../src/provider")

test('valitadion of uniqueness from deferent providers', () => {
    const aws_provider = provider.instance("aws")
    const oci_provider = provider.instance("oci")
    expect(oci_provider).not.toBe(aws_provider)
});

test('valitadion of uniqueness from same provider', () => {
    const aws_provider_1 = provider.instance("aws")
    const aws_provider_2 = provider.instance("aws")
    expect(aws_provider_1).toBe(aws_provider_2)
});