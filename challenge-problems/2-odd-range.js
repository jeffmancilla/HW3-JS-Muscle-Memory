/******************************************************************************
Write a function oddRange(end) that takes in a number and returns an array 
containing all positive odd numbers up to `end`.

Examples:

oddRange(13); // => [ 1, 3, 5, 7, 9, 11, 13 ]
oddRange(6); // => [ 1, 3, 5 ]
******************************************************************************/
function oddRange(end) {
    // your code here
    let array = []
    for (let i = 1; i <= end; i += 2){
        array.push(i)
    }
    return array
}
console.log(oddRange(asdf))

module.exports = oddRange