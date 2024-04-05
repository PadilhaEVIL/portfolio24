let hi = document.getElementById("horaInicial");
let mi = document.getElementById("minInicial");
let hf = document.getElementById("horaFinal");
let mf = document.getElementById("minFinal");
let resultado = document.getElementById("resultado");

function soma() {
   let somaHora = Number(hi.value) + Number(hf.value);
   let somaMin = Number(mi.value) + Number(mf.value);
   
   while (somaMin > 59) {
       somaMin -= 60;
       somaHora++;
   }
   
   resultado.innerHTML = somaHora + ":" + somaMin;
}

function sub() {
    let subHora = Number(hf.value) - Number(hi.value);
    let subMin = Number(mf.value) - Number(mi.value);

    // Corrigindo subtração de minutos se for negativo
    if (subMin < 0) {
        subMin += 60;
        subHora--; // Reduzir uma hora se precisarmos emprestar minutos
    }

    resultado.innerHTML = subHora + ":" + subMin;
}
