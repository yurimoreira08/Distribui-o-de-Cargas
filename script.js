document.getElementById("calculateButton").addEventListener("click", function () {
    // Obtém os valores inseridos pelo usuário
    const charge1Input = document.getElementById("charge1");
    const charge2Input = document.getElementById("charge2");

    const charge1 = parseFloat(charge1Input.value);
    const charge2 = parseFloat(charge2Input.value);

    // Validação dos inputs
    if (isNaN(charge1) || isNaN(charge2)) {
        alert("Por favor, insira valores válidos para ambas as cargas.");
        return;
    }

    // Calcula a carga final após contato
    const totalCharge = charge1 + charge2;
    const finalCharge1 = totalCharge / 2;
    const finalCharge2 = totalCharge / 2;

    // Exibe a animação
    const animationContainer = document.getElementById("animationContainer");
    animationContainer.style.display = "block";
    animationContainer.innerHTML = `
        <div class="bolinha bolinha1">${charge1.toFixed(2)} C</div>
        <div class="bolinha bolinha2">${charge2.toFixed(2)} C</div>
    `;

    const bolinha1 = document.querySelector(".bolinha1");
    const bolinha2 = document.querySelector(".bolinha2");

    // Anima as bolinhas para se encontrarem
    setTimeout(() => {
        bolinha1.style.transition = "left 2s";
        bolinha2.style.transition = "right 2s";
        bolinha1.style.left = "50%";
        bolinha2.style.right = "50%";

        setTimeout(() => {
            bolinha1.textContent = `${finalCharge1.toFixed(2)} C`;
            bolinha2.textContent = `${finalCharge2.toFixed(2)} C`;
        }, 2000); // Atualiza os valores após a animação
    }, 500); // Inicia a animação após 500ms

    // Exibe os resultados abaixo após a animação
    setTimeout(() => {
        const resultDiv = document.getElementById("result");
        resultDiv.innerHTML = `
            <p><strong>Carga final do objeto 1:</strong> ${finalCharge1.toFixed(2)} C</p>
            <p><strong>Carga final do objeto 2:</strong> ${finalCharge2.toFixed(2)} C</p>
        `;
    }, 3000); // Exibe o resultado após 3 segundos
});
