let boldBool = false
let underlineBool = false 
let italicBool = false
let zmienione = true
let czcionka = document.getElementById("czcionka").value
let wielkoscCzcionki = document.getElementById("wielkoscCzcionki").value
let kolorCzcionki = document.getElementById("kolorCzcionki").value
function format(x){
    switch(x){
        case "bold":
            boldBool = !boldBool
            break
        case "underline":
            underlineBool = !underlineBool
            break
        case "italic":
            italicBool = !italicBool
            break
    }
    zmienione = true
}

function notatnik(){
    if(!zmienione){
        return
    }

    czcionka = document.getElementById("czcionka").value
    wielkoscCzcionki = document.getElementById("wielkoscCzcionki").value
    kolorCzcionki = document.getElementById("kolorCzcionki").value

    if (wielkoscCzcionki < 1){
        document.getElementById("wielkoscCzcionki").value = 1
        wielkoscCzcionki = 1
    }
    else if(wielkoscCzcionki > 50){
            document.getElementById("wielkoscCzcionki").value = 50
            wielkoscCzcionki = 50
    }

    let x = document.createElement("span")
    if(boldBool) x.classList += "bold "
    if(underlineBool) x.classList += "underline "
    if(italicBool) x.classList += "italic "
    x.style.color = kolorCzcionki
    x.style.fontSize = wielkoscCzcionki + "px"
    x.style.fontFamily = czcionka
    x.innerHTML += " " //mala spacja
    document.getElementById("notatnik").appendChild(x)
    zmienione = false
}

function wyrownaj(strona){
    switch(strona){
        case "prawo":
            return document.getElementById("notatnik").style.textAlign = "right"
        case "srodek":
            return document.getElementById("notatnik").style.textAlign = "center"
        case "lewo":
            return document.getElementById("notatnik").style.textAlign = "left"
    }
}

setInterval(znaki,5000)
function znaki(){
    let napis = document.getElementById("notatnik").innerText
    let usun = 0
    for(let i = 0; i < napis.length; i++){
        if(napis[i] == " ") usun++
    }
    document.getElementById("footer").innerHTML = "Znaki: "+ (napis.length - usun) + " (ze spacjami)"
    console.log(new Array(napis))
}