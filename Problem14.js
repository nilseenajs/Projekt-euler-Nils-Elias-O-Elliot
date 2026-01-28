function CollatzSequence(limit) {
    let theNumber = 2;
    let maxLength = 0;
 
    for (let i = 2; i < limit; i++) {
        const length = checklength(i);
        if (length > maxLength) {
            maxLength = length;
            theNumber = i;
        }
    }
    return theNumber;
}
 
function checklength(number) {
    let length = 1;
 
    while (number !== 1) {
        if (number % 2 === 0) {
            number /= 2;
        } else {
            number = 3 * number + 1;
        }
        length++;
    }
    return length;
}
 
console.log(CollatzSequence(14));
 