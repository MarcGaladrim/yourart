const maxPrice = 200;
const minPrice = 50;

const priceByCountry: Record<string, number> = {};

export const getDeliveryPrice = (country: string) => {
  if (priceByCountry[country]) {
    return priceByCountry[country];
  }
  const price = Math.floor(Math.random() * (maxPrice - minPrice) + minPrice);

  priceByCountry[country] = price;
  return price;
};
