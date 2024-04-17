//* Production code file

export const addBagel = (bagelName,basketArray) => {
  // const basketArray = [];
  basketArray.push(bagelName)
  return basketArray[basketArray.length - 1];
};
