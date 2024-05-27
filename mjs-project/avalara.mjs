export function transformOrderData(input){

    const { orderId, customerId, currencyCode, commit, addresses, items } = input;
    const targetResult = {
        code: orderId,
        customerCode: customerId,
        currencyCode,
        commit,
        lines: items.map(item => ({
            number: item.id,
            quantity: item.quantity,
            amount: item.subTotal,
            itemCode: item.productId
        })),
        addresses: {
            shipTo: addresses.filter(addr => addr.type === "SHIP_TO").map(addr => ({
                region: addr.regionCode,
                country: addr.countryCode,
                postalCode: addr.postalCode,
                line1: addr.addressLine1,
                line2: addr.addressLine2
            }))[0] // Assumes there's only one SHIP_TO address
        }
    };

    return {
        targetResult,
        uri: "http://localhost/api/addressValidation?apiKey=ABC-123"
    };

}
