export const shuffle = arr => {
  return arr
    .map(item => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(i => i.item);
};
