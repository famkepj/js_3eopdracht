const age = 26;
const isFemale = false;
const driverstatus = "box";
const firstName = "Bas"
const totalAmount = 50;


if (age > 17){
    console.log ("Welom in onze kroeg");
} else{
    console.log("Helaas ben je nog geen 18 en mag ik je niet binnen laten");
}

if (isFemale){
    console.log("welkom op de ladiesnight");
} else{
    console.log("Het is ladiesnight, kies een andere datum");
}

if (driverstatus == "bob"){
    console.log("Rij veilig naar huis");
} else{
    console.log("Je mag niet meer autorijden, bestel een taxi");
}

if (age >= 18 && age <=25){
    console.log("Je krijgt 50% korting!")
} else{
    console.log("Je hebt niet de leeftijd van onze doelgroep")
}

if (firstName == "Bram" || firstName == "Sarah"){
    console.log("Je krijgt een gratis biertje")
} else{
    console.log ("wij bestaat 50 jaar")
}


if (totalAmount >= 100){
    console.log ("Je krijgt een gratis fles champagne")
} else if (totalAmount >= 50){
    console.log ("Je krijgt een gratis portie nachos")
} else if (totalAmount >= 25){
    console.log ("Je krijgt een gratis portie (vega)bitterballen")
} else {
    console.log ("Besteed minimaal €25,- voor een gratis gift")
}
