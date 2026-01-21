let sum = 0; //skapar variabel som heter sum//

for (let i = 1; i < 1000; i++) {         //börjar en lop där i börjar på 1 och lägger till i+1 så 1,2,3,4 och slutar när iär 999// 
  if (i % 3 === 0 || i % 5 === 0) {     // kollar så i är delbart med 3 eller 5 och har rest med 0 //
    sum += i;                            // lägger till alla värden där i är delbart med 3 eller 5 upp till att i är 999 tillsammans//
  }
}

console.log(sum);
