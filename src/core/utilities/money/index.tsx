export const formatCurrency = (input: number, currencyCode: string = "VND") => {
  return input.toLocaleString("it-IT", {
    style: "currency",
    currency: currencyCode,
  });
};
