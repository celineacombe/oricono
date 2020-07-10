function formatPrice(price) {
    return (price / 100).toLocaleString('fr-FR', { style: "currency", currency: "EUR" })
}

export {
    formatPrice
}