export const useFormatCurrency = () => value => `$${parseFloat(value).toFixed(2)}`