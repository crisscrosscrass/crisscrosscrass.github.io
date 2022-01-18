let array = [];

array.filter(
  (item, index, array) =>
    array.findIndex((nextItem) => nextItem.id === item.id) === index
);
