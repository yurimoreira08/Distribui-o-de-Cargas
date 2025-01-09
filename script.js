document.getElementById("chargeForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Obtém os valores inseridos pelo usuário
    const charge1 = parseFloat(document.getElementById("charge1").value);
    const charge2 = parseFloat(document.getElementById("charge2").value);

    // Calcula a carga final após contato
    const totalCharge = charge1 + charge2;
    const finalCharge1 = totalCharge / 2;
    const finalCharge2 = totalCharge / 2;

    // Exibe os resultados
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `
        <p><strong>Carga final do objeto 1:</strong> ${finalCharge1.toFixed(2)} C</p>
        <p><strong>Carga final do objeto 2:</strong> ${finalCharge2.toFixed(2)} C</p>
    `;
});
