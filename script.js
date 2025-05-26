
function main() {
    const pesoU = Number(document.getElementById("peso").value);
    const alturaU = Number(document.getElementById("altura").value);
    const sexoU = document.getElementById("sexo")?.value; // erro??
    if (validarEntradas(pesoU, alturaU, sexoU) === false) {
        alert("Por favor, preencha os campos corretamente!");
        return;
    }
    else { 
        let alturaConvert = alturaU / 100;
        let imcU = calcularIMC(pesoU, alturaConvert);
        let resultadoU = IMCResult(imcU);
        let pesoIdealU = calcularPesoIdeal(alturaConvert, sexoU);

        document.getElementById("resultado-imc").innerHTML = `Seu IMC é: ${imcU}`;
        document.getElementById("situacao").innerHTML = `Sua situação atual é: ${resultadoU}`;
        document.getElementById("peso-ideal").innerHTML = `Seu peso ideal é: ${pesoIdealU} kg`;
    }
}


function validarEntradas(pesoU, alturaU, sexoU) {
    if (pesoU <= 0 || isNaN(pesoU)) {
        return false;
    }
    if (alturaU <= 0 || isNaN(alturaU)) {
        return false;
    }
    if (sexoU !== "masculino" && sexoU !== "feminino") {
        return false;
    }
    return true;
}

function calcularIMC(pesoU, alturaConvert) {
    imcU = pesoU / (alturaConvert * alturaConvert);
    return imcU;
}

function calcularPesoIdeal(alturaConvert, sexoU) {
    if (sexoU === "masculino") {
        pesoIdealU = 22 * (alturaConvert * alturaConvert);
    } else if (sexoU === "feminino") {
        pesoIdealU = 21 * (alturaConvert * alturaConvert);
    }
}

function IMCResult(imcU) {
    if (imcU >= 40)
        resultadoU = "Obesidade de grau III";
    else if (imcU >= 35)
        resultadoU = "Obesidade de grau II";
    else if (imcU >= 30)
        resultadoU = "Obesidade de grau I";
    else if (imcU >= 25)
        resultadoU = "Sobrepeso";
    else if (imcU >= 18.5)
        resultadoU = "Peso normal";
    else if (imcU >= 17)
        resultadoU = "Abaixo do peso (leve)";
    else if (imcU >= 16)
        resultadoU = "Abaixo do peso (grave)";
    else
        resultadoU = "Abaixo do peso (muito grave)";
}