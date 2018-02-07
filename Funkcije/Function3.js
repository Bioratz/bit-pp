function trocifreniBroj(num) {
    if (num < 1000 && num > 99) {
        result = "Jeste trocifren broj";
    } else {
        result = "Nije trocifren broj";
    }
    console.log(result);
}

trocifreniBroj(663);