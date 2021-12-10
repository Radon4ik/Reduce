// function withArgs(a, b) {
//     return a + b;
// }

// function map(arr, callback) {
// const newArr = [];

//     for(let i = 0; i < arr.length; i++) {
//         newArr.push(callback(arr[i], i, arr));

//     }
//     return newArr;
// }

// const mappedArray = mep(numbers, function(item, index, arr) {

// });



let string = 'While the above definition is specific fuck to an asymmetric key  cryptosystem, fuck it can be suck fuck adapted suck to the  suck symmetric case by replacing the public key encryption function with an encryption oracle, which retains the secret encryption key and encrypts arbitrary plaintexts at the adversary'


function filterText(str) {
    let text = str.split(' ');

    const result = text.filter(function(item) {
        if (item !== 'fuck' && item !== 'suck') {
            return item;
        }
    });

    return result.join(' ');
}

console.log(filterText(string));