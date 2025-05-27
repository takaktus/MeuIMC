
function main() {
    const pesoU = Number(document.getElementById("peso").value);
    const alturaU = Number(document.getElementById("altura").value);
    const sexoU = document.getElementById("sexo")?.value;
    if (validarEntradas(pesoU, alturaU, sexoU) === false) {
        alert("Por favor, preencha os campos corretamente!");
        return;
    }
    else {
        const alturaConvert = alturaU / 100;
        let imcU = calcularIMC(pesoU, alturaConvert);
        let resultadoU = IMCResult(imcU);
        let pesoIdealU = calcularPesoIdeal(alturaConvert, sexoU);

        document.getElementById("resultado-imc").value = imcU.toFixed(1);
        document.getElementById("situacao").value = resultadoU;
        document.getElementById("peso-ideal").value = pesoIdealU.toFixed(2) + "kg";
    }
}


function validarEntradas(pesoU, alturaU, sexoU) {
    if (pesoU <= 0 || isNaN(pesoU)) {
        return false;
    }
    if (alturaU <= 0 || isNaN(alturaU) || alturaU > 300 || alturaU < 50) {
        return false;
    }
    if (sexoU !== "masculino" && sexoU !== "feminino") {
        return false;
    }
    return true;
}

function calcularIMC(pesoU, alturaConvert) {
    const imcU = pesoU / (alturaConvert * alturaConvert);
    return imcU;
}

function calcularPesoIdeal(alturaConvert, sexoU) {
    let pesoIdealU;
    if (sexoU === "masculino") {
        pesoIdealU = 22 * (alturaConvert * alturaConvert);
        return pesoIdealU;
    } else if (sexoU === "feminino") {
        pesoIdealU = 21 * (alturaConvert * alturaConvert);
        return pesoIdealU;
    }
}

function IMCResult(imcU) {
    let resultadoU;
    if (imcU >= 40){
        resultadoU = "Possível obesidade de grau III";
        document.getElementsByTagName("body")[0].style.backgroundColor = "darkorange";
    }
    else if (imcU >= 35){ 
        resultadoU = "Possível obesidade de grau II";
        document.getElementsByTagName("body")[0].style.backgroundColor = "darkorange";
    }
    else if (imcU >= 30){ 
        resultadoU = "Possível obesidade de grau I";
        document.getElementsByTagName("body")[0].style.backgroundColor = "darkorange";
    }
    else if (imcU >= 25){ 
        resultadoU = "Sobrepeso";
    }
    else if (imcU >= 18.5){ 
        resultadoU = "IMC normal";
        document.getElementsByTagName("body")[0].style.backgroundColor = "lightblue"; 
    }
    else if (imcU >= 17){ 
        resultadoU = "Abaixo do peso (leve)";
    }
    else if (imcU >= 16){ 
        resultadoU = "Abaixo do peso (grave)";
        document.getElementsByTagName("body")[0].style.backgroundColor = "darkorange";
    }
    else{ 
        resultadoU = "Abaixo do peso (muito grave)";
        document.getElementsByTagName("body")[0].style.backgroundColor = "darkorange";
    }
    return resultadoU;
}

function limparCampos() {
    document.getElementById("peso").value = "";
    document.getElementById("altura").value = "";
    document.getElementById("sexo").value = "masculino";
    document.getElementById("resultado-imc").value = "";
    document.getElementById("situacao").value = "";
    document.getElementById("peso-ideal").value = "";
    document.getElementsByTagName("body")[0].style.backgroundColor = "lightgreen";
}