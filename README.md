# 🏆 Snack Exercises - TypeScript & JavaScript

Questo repository contiene una serie di esercizi ("Snack") per praticare TypeScript e JavaScript.

---

## 🏆 Snack 1 - Gestione dei Tipi di Dato

Hai ricevuto un dato generico da un'API, ma non sai di che tipo sia…  
Il tuo compito è controllare il tipo del dato e stampare il valore in modo corretto.

### Requisiti
- **Se è una stringa** → stampala in **maiuscolo**
- **Se è un numero** → moltiplicalo per due e stampalo
- **Se è un booleano** → stampa **“Sì”** o **“No”**
- **In tutti gli altri casi** → stampa **“Tipo non supportato”**

### 🎯 BONUS
- Se è `null` → stampa **“Il dato è vuoto”**
- Se è un **array** → stampa la sua **lunghezza**
- Se è una **Promise** → attendi che si risolva e stampa il valore del `resolve`.

---

## 🏆 Snack 2 - Type Alias Dipendente

Crea un **type alias `Dipendente`** che rappresenta un lavoratore con i seguenti dati:

- `nome` → **stringa**
- `cognome` → **stringa**
- `annoNascita` → **numero**
- `sesso` → può essere solo `"m"` o `"f"`
- `anniDiServizio` → array di numeri (es. `[2014, 2015, 2017, 2018]`)

### 🎯 BONUS
Il type alias `Dipendente` ha anche i seguenti dati:
- `emailAziendale` → **email assegnata al dipendente (non modificabile)**
- `contratto` → valori limitati a `"indeterminato"`, `"determinato"`, `"freelance"`

---

## 🏆 Snack 3 - Estensione di Dipendente

Estendiamo `Dipendente` per definire due ruoli specifici all'interno dell'azienda:

### 👨‍💻 Developer
- `livelloEsperienza` → `"Junior" | "Mid" | "Senior"`
- `linguaggi` → array di linguaggi di programmazione (opzionale)
- `certificazioni` → array di stringhe (può essere vuoto)

### 👩‍💼 Project Manager
- `teamSize` → numero di persone nel team (può essere `null`)
- `budgetGestito` → totale del budget annuale (opzionale)
- `stakeholderPrincipali` → array di stringhe (può essere vuoto)

### 🎯 BONUS - Team
Definiamo un nuovo type alias `Team`, che rappresenta un gruppo di lavoro:

- `nome` → nome del team (**stringa**)
- `progettoAttuale` → nome del progetto (**può essere null**)
- `budget` → importo numerico (**sempre presente**)
- `membri` → **tuple** in cui il primo elemento è sempre un **Project Manager**, seguito da **almeno un Developer**.

---

## 📌 Obiettivi
Questi snack servono ad allenarsi con:
- **TypeScript** → Type alias, union types, tuple, estensioni di interfacce.
- **JavaScript** → Gestione dinamica dei tipi, controllo valori speciali (`null`, array, Promise).

---

✨ Buon divertimento con gli snack!
