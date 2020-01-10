const ProviderSingleton = function (resources) {
  const oci = Symbol()
  if (!this[oci]) {
    this[oci] = resources// new Provider(provider)
  }
  return this[oci]
}

module.exports = ProviderSingleton


