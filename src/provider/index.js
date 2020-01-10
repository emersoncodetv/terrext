class Provider {
  constructor(provider) {
    this.provider = provider
  }
}

const ProviderSingleton = (function () {
  const providers = {}
  const add = (provider) => {
    if (!providers[provider]) {
      providers[provider] = Symbol(provider)
      this[providers[provider]] = new Provider(provider)
    }
  }

  return {
    instance: (provider) => {
      add(provider)
      return this[providers[provider]]
    }
  }
})()

module.exports = ProviderSingleton
