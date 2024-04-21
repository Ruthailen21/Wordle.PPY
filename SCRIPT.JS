let intentos = 6

const INPUT = document.getElementById("guess-input");
const BOTON = document.getElementById("guess-button");
console.log(BOTON);

BOTON.addEventListener("click",intentar);

function intentar() {
  const intento = leerIntento();
  const GRID = document.getElementById("grid");
  const ROW = document.createElement("div");
  ROW.className = "row";
  console.log("div", ROW);
  
  intentos = intentos - 1; //intentos --1
  console.log("te quedan", intentos, "intentos");
  for (let pos in palabra) { 
    console.log("posicion del elemento", pos);
    const SPAN = document.createElement("span");
    SPAN.className = "letter";
    SPAN.innerHTML = intento[pos];
    if (intento[pos] === palabra[pos]) { 
    console.log(intento[pos], "verde");
        SPAN.style.backgroundColor = "green";
    } else if (palabra.includes(intento[pos])) {
        console.log(intento[pos],"amarillo")
        SPAN.style.backgroundColor = "yellow";
    } else {
        console.log(intento[pos],"gris");
        SPAN.style.backgroundColor = "grEy";
    }
    ROW.appendChild(SPAN);
  }
  GRID.appendChild(ROW);

   if (palabra === intento) { 
     terminar("<h1>GANASTE<p>&#129395;<p><h1>");
     return;
    }
   if (intentos === 0) {
      terminar("<h1>PERDISTE<p>&#128542;<p><h1>")
     return;
    }
}
function leerIntento() {
    console.log("leerIntento" + INPUT.value);
    return INPUT.value.toUpperCase();
}

function terminar(mensaje) {
     let estado = document.getElementById("guesses");
     INPUT.disabled = true;
     BOTON.disabled = true;
     estado.innerHTML = mensaje;
     console.log(estado,mensaje);
} 
let diccionario = ["RATON", "CAMA", "TANTO", "MONTA", "NADAS"];
let palabra = diccionario[Math.floor(Math.random() * diccionario.length)];
console.log("palabra a adivinar" + palabra);


//BOTON.addEventListener("click",jugar)
//function jugar (){
    //let usuario = document.getElementById("guess-imput").value;
    //console.log("click", usuario);
    //intentar(usuario);
//}
