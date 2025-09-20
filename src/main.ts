let apiData : unknown;

if(typeof apiData === "string"){
    console.log(apiData.toUpperCase());
}else if(typeof apiData === "number"){
    console.log(apiData * 2);
}else if(typeof apiData === "boolean"){
    apiData === true ? console.log("Si") : console.log("No")
}else if(apiData === null){
    console.log("Il dato è vuoto");
}else if(Array.isArray(apiData)){
    console.log(apiData.length);
}else if(apiData instanceof Promise){
    apiData.then(data=> console.log(data))
}else{
    console.log("Tipo non suppoprtato")
}

// 🏆 Snack 1 - Gestione dei Tipi di Dato
// Hai ricevuto un dato generico da un'API, ma non sai di che tipo sia…
// Il tuo compito è controllare il tipo del dato e stampare il
//  valore in modo corretto.

// Requisiti
// Se è una stringa → stampala in maiuscolo
// Se è un numero → moltiplicalo per due e stampalo
// Se è un booleano → stampa “Sì” o “No”
// In tutti gli altri casi → stampa “Tipo non supportato”
// 🎯 BONUS
// Se è null → stampa “Il dato è vuoto”
// Se è un array → stampa la sua lunghezza
// Se è una Promise → attendi che si risolva e stampa il valore del resolve.