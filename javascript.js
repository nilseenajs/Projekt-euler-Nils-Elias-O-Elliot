let n = 168000/2; //för alla udda tal//
/* matematisk formel jag hittade hoppas den fungerar*/
/*(n(2n-1)(2n+1))/3 */

let result= (n*(2*n-1)*(2*n+1))/3
console.log(result);

//alternativt//

let sum=0;
for (let i=1; i<168000; i+=2){
    sum +=i*i;
}
console.log(sum);