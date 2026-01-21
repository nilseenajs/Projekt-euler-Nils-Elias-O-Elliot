let a = 1; //första fibbonacci talet//
let b = 2; // andra talet//
let sum = 0; // variabel som används för jämna tal//
 
while (a <= 4000000) {
    if (a % 2 === 0) //kollar om a är jämnt genom att dela med 2 och kollar om resten är 0//
    {
      sum += a; //lägger de jämna talen i summan
    }
 
    let next = a + b; //beräknar nästa fibbonaci-tal genom att använda de senaste talen
    a = b; //talet som tidigare var A blir till B//
    b = next; //flyttar B till nästa tal i sekvensen
  }
 
  console.log(sum);