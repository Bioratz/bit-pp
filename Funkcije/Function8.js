var a = [1, 2, 3, 4, 5, 1, 1, 2];
var broj = 1;

function brojPojavljivanja(num, array) {
    var brojac = 0;

    for (var i = 0; i < array.length; i++) {
        if (array[i] === num) {
            brojac++;
        }
    }

    return brojac;
}

console.log(brojPojavljivanja(broj, a));



//Verzija 2 pojednostavljena;

var a = [1,2,1,1];                              //a je niz 
var broj = 1;                                 //trazimo broj 1

function brojPojavljivanja (num, array) {    //trazimo odredjeni broj i niz (uopsteni broj a i uopsteni niz)
   var brojac = 0;                           // opet nezavisna funkcija

   for (var i = 0; i < array.lenght; i++) {  // i je pozicija u nizu
                                             //za i koji je na poziciji 0, dok je i manje od lenght (8)
       if (array[i] === num) {               //ako je element sa indexom u nizu (i=0 vidi gornji red) jednak num tj broj =1,
           brojac++;                          //jer je 1 na poziciji 0 i ako je element indexa (i) === samom broju, onda se i
       }                                     //vraca gore i uvecava za 1 (i++)    brojac++ pomera mesto za 1 u nizu 
    }
    return brojac;
}

console.log(brojPojavljivanja(broj, a));