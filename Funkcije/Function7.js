function brojCifara(num) {
    var brojac = 0;
    var cifra;

    while (num > 0) {           // 53                       // 5                        // 0
        cifra = num % 10;       // cifra = 53 % 10 = 3      // cifra = 5 % 10 = 5
        brojac++;               // brojac = 0 + 1 = 1       // brojac = 1 + 1 = 2
        num = num - cifra;      // num = 53 - 3 = 50        // num = 5 - 5 = 0
        num = num / 10;         // num = 50 / 10 = 5        // num = 0 / 10 = 0
    }

    return brojac;              // brojac = 2
}

console.log("Broj cifara: " + brojCifara(53));



//Verzija 2


function brojCifara2 (num){   
    var brojac = 0;
                                //Ulaz 1                                        //Ulaz 2
    while (num > 0) {           //num je 53, veci je od 0                       //num je 5 
        num -= (num % 10);      //ulazi 53 - (53 % 10)  53-3=50                 //5 - (5 % 10) tj 5-5 =0                    
        num /10;                // sad je num 50 / 10 = 5, NUM JE 5
        digits++;               //digits je nezavisan,0 i sa ++ uvecava za 1     // digits 1 + 1 = 2
    }                          //dakle digits je 0 + 1 = 1                       
      return digits;

}

console.log ("Broj cifara je " + brojCifara2(53));    

