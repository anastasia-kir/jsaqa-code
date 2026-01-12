function sortByName(inputArray) {

  if (!Array.isArray(inputArray)) {
    return [];
  }


  if (inputArray.length === 0) {
    return [];
  }

  inputArray.sort(function (a, b) {
    var nameA = a.toLowerCase();
    var nameB = b.toLowerCase();

    if (nameA < nameB) {
      return -1;
    }

    if (nameA > nameB) {
      return 1;
    }

    return 0;
  });

  return inputArray;
}

module.exports = {
  sortByName,
};
