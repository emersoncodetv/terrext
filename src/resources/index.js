class Provider {
    constructor(provide) {
        this[Symbol(provider)] = provider
    }
}

const Resource = ((provider, resource, atributes) => {
    const provider = provider

    return {

    }
})()