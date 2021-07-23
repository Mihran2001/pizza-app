export default function sortedPizzas(ArticlesContent: any) {
  // TODO
  const arrToSort = [...ArticlesContent];

  return arrToSort.sort(function (a: any, b: any) {
    if (a.name > b.name) {
      return 1;
    }
    if (b.name > a.name) {
      return -1;
    }
    return 0;
  });
}
