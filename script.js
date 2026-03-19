// Pegando elementos
const input = document.querySelector(".input");

const resultado10 = document.querySelector(".base10_resultado");
const resultado2 = document.querySelector(".base2_resultado");
const resultado8 = document.querySelector(".base8_resultado");
const resultado16 = document.querySelector(".base16_resultado");

// Função principal
function converter(baseOrigem) {
    let valor = input.value.trim();

    if (valor === "") {
        alert("Digite um número!");
        return;
    }

    let decimal = parseInt(valor, baseOrigem);

    if (isNaN(decimal)) {
        alert("Número inválido para essa base!");
        return;
    }

    // 🔥 MOSTRA NA TELA
    resultado10.innerText = decimal;
    resultado2.innerText = decimal.toString(2);
    resultado8.innerText = decimal.toString(8);
    resultado16.innerText = decimal.toString(16).toUpperCase();
}

// Eventos dos botões
document.querySelector(".base10").onclick = () => converter(10);
document.querySelector(".base2").onclick = () => converter(2);
document.querySelector(".base8").onclick = () => converter(8);
document.querySelector(".base16").onclick = () => converter(16);
const helpBtn = document.getElementById("helpBtn");
const helpPanel = document.getElementById("helpPanel");
const closeHelp = document.getElementById("closeHelp");
const explicacao = document.getElementById("explicacao");

// abrir
helpBtn.onclick = () => {
    helpPanel.classList.remove("hidden");
};

// fechar
closeHelp.onclick = () => {
    helpPanel.classList.add("hidden");
};

// função de explicação

// ======================
// 🔥 CONVERTER
// ======================
function converter(base) {
    let valor = input.value.trim();

    if (valor === "") {
        alert("Digite um número!");
        return;
    }

    // 👉 converte para decimal corretamente
    let decimal = parseInt(valor, base);

    if (isNaN(decimal)) {
        alert("Número inválido!");
        return;
    }

    // 👉 mostra resultados
    resultado10.innerText = decimal;
    resultado2.innerText = decimal.toString(2);
    resultado8.innerText = decimal.toString(8);
    resultado16.innerText = decimal.toString(16).toUpperCase();

    // 👉 chama explicação
    explicar(valor, base, decimal);
}

// ======================
// 🧠 EXPLICAÇÃO COMPLETA
// ======================
function explicar(valor, base, decimal) {

    let texto = "";

    // ======================
    // 🔟 DECIMAL
    // ======================
    if (base === 10) {

        let num = decimal;
        let passos = "";

        while (num > 0) {
            let resto = num % 2;
            passos += `${num} ÷ 2 = ${Math.floor(num / 2)} resto ${resto}<br>`;
            num = Math.floor(num / 2);
        }

        texto = `
        <strong>Você digitou um número DECIMAL (${valor})</strong><br><br>

        👉 Para converter para BINÁRIO:<br>
        Dividimos por 2 até chegar em 0:<br><br>

        ${passos}

        👉 Lemos os restos de baixo para cima<br><br>

        ✔ Resultado Binário: <strong>${decimal.toString(2)}</strong><br><br>

        ✔ Octal: ${decimal.toString(8)}<br>
        ✔ Hexadecimal: ${decimal.toString(16).toUpperCase()}
        `;
    }

    // ======================
    // 🔢 BINÁRIO
    // ======================
    if (base === 2) {

        let bin = valor.split("").reverse();
        let soma = 0;
        let passos = "";

        bin.forEach((bit, i) => {
            let conta = Number(bit) * Math.pow(2, i);
            soma += conta;
            passos += `${bit} × 2^${i} = ${conta}<br>`;
        });

        texto = `
        <strong>Você digitou um número BINÁRIO (${valor})</strong><br><br>

        👉 Multiplicamos cada dígito por potência de 2:<br><br>

        ${passos}

        👉 Somamos tudo<br><br>

        ✔ Resultado Decimal: <strong>${soma}</strong><br><br>

        ✔ Octal: ${decimal.toString(8)}<br>
        ✔ Hexadecimal: ${decimal.toString(16).toUpperCase()}
        `;
    }

    // ======================
    // 🟠 OCTAL
    // ======================
    if (base === 8) {

        let oct = valor.split("").reverse();
        let soma = 0;
        let passos = "";

        oct.forEach((num, i) => {
            let conta = Number(num) * Math.pow(8, i);
            soma += conta;
            passos += `${num} × 8^${i} = ${conta}<br>`;
        });

        texto = `
        <strong>Você digitou um número OCTAL (${valor})</strong><br><br>

        👉 Multiplicamos por potências de 8:<br><br>

        ${passos}

        ✔ Resultado Decimal: <strong>${soma}</strong><br><br>

        ✔ Binário: ${decimal.toString(2)}<br>
        ✔ Hexadecimal: ${decimal.toString(16).toUpperCase()}
        `;
    }

    // ======================
    // 🟣 HEXADECIMAL
    // ======================
    if (base === 16) {

        let hex = valor.toUpperCase().split("").reverse();
        let soma = 0;
        let passos = "";

        hex.forEach((char, i) => {

            let valorNum = isNaN(char)
                ? char.charCodeAt(0) - 55
                : Number(char);

            let conta = valorNum * Math.pow(16, i);
            soma += conta;

            passos += `${char} (${valorNum}) × 16^${i} = ${conta}<br>`;
        });

        texto = `
        <strong>Você digitou um número HEXADECIMAL (${valor})</strong><br><br>

        👉 Letras: A=10, B=11...<br><br>

        ${passos}

        ✔ Resultado Decimal: <strong>${soma}</strong><br><br>

        ✔ Binário: ${decimal.toString(2)}<br>
        ✔ Octal: ${decimal.toString(8)}
        `;
    }
    // ======================
// 🔟 DECIMAL → TODAS
// ======================
if (base === 10) {

    let num = decimal;

    // 🔹 BINÁRIO (÷2)
    let temp = num;
    let passosBin = "";
    while (temp > 0) {
        let resto = temp % 2;
        passosBin += `${temp} ÷ 2 = ${Math.floor(temp / 2)} resto ${resto}<br>`;
        temp = Math.floor(temp / 2);
    }

    // 🔹 OCTAL (÷8)
    temp = num;
    let passosOct = "";
    while (temp > 0) {
        let resto = temp % 8;
        passosOct += `${temp} ÷ 8 = ${Math.floor(temp / 8)} resto ${resto}<br>`;
        temp = Math.floor(temp / 8);
    }

    // 🔹 HEXADECIMAL (÷16)
    temp = num;
    let passosHex = "";
    while (temp > 0) {
        let resto = temp % 16;

        // converte 10-15 para A-F
        let hexChar = resto >= 10 
            ? String.fromCharCode(resto + 55) 
            : resto;

        passosHex += `${temp} ÷ 16 = ${Math.floor(temp / 16)} resto ${hexChar}<br>`;
        temp = Math.floor(temp / 16);
    }

    texto = `
    <strong>Você digitou um número DECIMAL (${valor})</strong><br><br>

    🔹 <strong>Para BINÁRIO (÷2):</strong><br>
    ${passosBin}
    👉 Resultado: <strong>${decimal.toString(2)}</strong><br><br>

    🔹 <strong>Para OCTAL (÷8):</strong><br>
    ${passosOct}
    👉 Resultado: <strong>${decimal.toString(8)}</strong><br><br>

    🔹 <strong>Para HEXADECIMAL (÷16):</strong><br>
    ${passosHex}
    👉 Resultado: <strong>${decimal.toString(16).toUpperCase()}</strong>
    `;
}

    explicacao.innerHTML = texto;
}