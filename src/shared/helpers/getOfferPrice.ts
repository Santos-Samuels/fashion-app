export const getOfferPrice = (price: number) => {
  return (price - price * 0.1).toFixed(2);
};