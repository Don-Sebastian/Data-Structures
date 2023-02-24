function replaceAlphabet(string, target, arr){
    let stringArray = [...string];
    // for (let i = 0; i < stringArray.length; i++){
    //     if (stringArray[i] == target) value
    // }
    // let newArr = [];
    // newArr[0] = stringArray.pop();
    // for (let i = 0, j = 1; i < stringArray.length; i++, j++){
        
    //     newArr[j] = stringArray[i];
    // }
    // console.log(newArr.join(''));

    // for (let i = 0; i < stringArray.length; i++) {
    //     if (stringArray[i].charCodeAt() == target.charCodeAt()) {
    //         stringArray[i] = String.fromCharCode(stringArray[i].charCodeAt() + 2);
    //     }
    // }
    // console.log(stringArray.join(''));

    for (let i = 0; i < stringArray.length; i++){
        stringArray[i] = stringArray[target - 1]
    }
    // console.log(stringArray.join(''));

};
replaceAlphabet('hello', 3)