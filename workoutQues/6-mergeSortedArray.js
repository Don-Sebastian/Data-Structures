const mergeSortedArray = (array1, array2) => {
    let newArray = [];
    const newArrayLength = array1.length + array2.length;
    console.log(array1,array2);
    for (i = 0, j = 0; i < array1.length && j < array2.length ; ) {
        console.log(array1[i], array2[j]);
      if (array1[i] <= array2[j]) {
        newArray.push(array1[i]);
        i++;
      } else {
        newArray.push(array2[j]);
        j++;
      }
    }

    return newArray;
}
console.log(mergeSortedArray([0, 3, 4, 31], [4, 6, 30]));

