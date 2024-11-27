// Função para calcular o IMC e classificar o peso
function calcularIMC() {
    // Obter os dados do usuário
    const nome = prompt("Digite o seu nome:");
    const alturaEmCm = parseFloat(prompt("Digite a sua altura em centímetros:"));
    const peso = parseFloat(prompt("Digite o seu peso em quilogramas:"));
  
    // Converter a altura para metros
    const alturaEmMetros = alturaEmCm / 100;
  
    // Calcular o IMC
    const imc = peso / (alturaEmMetros * alturaEmMetros);
  
    // Classificar o IMC
    let classificacao;
    if (imc < 16) {
      classificacao = "Baixo peso muito grave";
    } else if (imc < 17) {
      classificacao = "Baixo peso grave";
    } else if (imc < 18.5) {
      classificacao = "Baixo peso";
    } else if (imc < 25) {
      classificacao = "Peso normal";
    } else if (imc < 30) {
      classificacao = "Sobrepeso";
    } else if (imc < 35) {
      classificacao = "Obesidade grau I";
    } else if (imc < 40) {
      classificacao = "Obesidade grau II";
    } else {
      classificacao = "Obesidade grau III";
    }
  
    // Exibir o resultado
    console.log(`Olá, ${nome}!`);
    console.log(`Seu IMC é: ${imc.toFixed(2)}`);
    console.log(`Classificação: ${classificacao}`);
  }
  
  // Chamar a função para iniciar o cálculo
  calcularIMC();