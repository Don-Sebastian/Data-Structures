const nemo = ['nemo'];
const large = new Array(1).fill('nemo');

// function findNemo(array) {
//     let t0 = performance.now();
//     for (let i = 0; i < array.length; i++){
//         if (array[i] === 'nemo') {
//             console.log('Found Nemo');
//         }
//     }
//     let t1 = performance.now();
//     console.log('execution took ' +(t1 - t0) + ' millisec' );
// }

const findNemo = array => {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === "nemo") {
        console.log("Found Nemo");
      }
    }
}

// findNemo(large);

console.log(Math.pow(6, 10000));
