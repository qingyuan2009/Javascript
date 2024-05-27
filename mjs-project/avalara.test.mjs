import { transformOrderData } from './avalara.mjs';

test('transforms order data correctly', () => {
  const input = {
    orderId: "00001000",
    type: "SALES_ORDER",
    customerId: "wei.liu@homemail.ch",
    orderedAt: "2024-03-04T11:42:50+0800",
    currencyCode: "USD",
    addresses: [
      {
        type: "SHIP_TO",
        addressLine1: "18 Fairfield Street",
        addressLine2: "Apt, Suite",
        city: null,
        regionCode: "CA",
        countryCode: "US",
        postalCode: "95116"
      }
    ],
    items: [
      {
        id: "0",
        productId: "300938",
        basePrice: 114.12,
        quantity: 2,
        subTotal: 228.24,
        discount: null,
        taxIncluded: null,
        discountIncluded: null,
        addresses: []
      },
      {
        id: "1",
        productId: "553637",
        basePrice: 264.69,
        quantity: 3,
        subTotal: 264.69,
        discount: null,
        taxIncluded: null,
        discountIncluded: null,
        addresses: []
      }
    ],
    commit: false
  };

  const expectedOutput = {
    targetResult: {
      code: "00001000",
      customerCode: "wei.liu@homemail.ch",
      currencyCode: "USD",
      commit: false,
      lines: [
        {
          number: "0",
          quantity: 2,
          amount: 228.24,
          itemCode: "300938"
        },
        {
          number: "1",
          quantity: 3,
          amount: 264.69,
          itemCode: "553637"
        }
      ],
      addresses: {
        shipTo: {
          region: "CA",
          country: "US",
          postalCode: "95116",
          line1: "18 Fairfield Street",
          line2: "Apt, Suite"
        }
      }
    },
    uri: "http://localhost/api/addressValidation?apiKey=ABC-123"
  };

  const result = transformOrderData(input);
  expect(result).toEqual(expectedOutput);
});
