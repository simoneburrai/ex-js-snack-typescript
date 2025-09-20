
/////////////////////////SNACK 3///////////////////////////////


type Developer = Dipendente & {
    livelloEsperienza : "Junior" | "Mid" | "Senior",
    linguaggi?: string[],
    certificazioni : string[]
}

type ProjectManager = Dipendente & {
    teamSize : number | null,
    budgetGestito? : number,
    stakeholderPrincipali : string[] 
}

type Team = {
    nome : string,
    progettoAttuale : string | null,
    budget : number,
    membri: [ProjectManager, ...Developer[]]
}

/////////////////////////SNACK 2////////////////////////////////


type Dipendente = {
    nome: string,
    cognome: string,
    annoNascita: number,
    sesso : "m" | "f",
    anniDiServizio : number[],
    readonly emailAziendale : string,
    contratto: "determinato" | "indeterminato" | "freelance"
}


///////////////////////SNACK 1/////////////////////////////////////

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

