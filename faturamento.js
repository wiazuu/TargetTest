const fs = require('fs');


function calcularFaturamento(faturamentoJson) {
    const dados = JSON.parse(fs.readFileSync(faturamentoJson, 'utf-8'));

    const faturamentosValidos = dados.filter(dia => dia.valor > 0).map(dia => dia.valor);

    if (faturamentosValidos.length === 0) {
        console.log("Não há dias com faturamento no mês.");
        return;
    }

    const menorFaturamento = Math.min(...faturamentosValidos);
    const maiorFaturamento = Math.max(...faturamentosValidos);

    const mediaMensal = faturamentosValidos.reduce((acc, valor) => acc + valor, 0) / faturamentosValidos.length;
    const diasAcimaDaMedia = faturamentosValidos.filter(faturamento => faturamento > mediaMensal).length;

    console.log(`Menor valor de faturamento: R$ ${menorFaturamento.toFixed(2)}`);
    console.log(`Maior valor de faturamento: R$ ${maiorFaturamento.toFixed(2)}`);
    console.log(`Número de dias com faturamento acima da média: ${diasAcimaDaMedia}`);
}
calcularFaturamento('faturamento.json');
