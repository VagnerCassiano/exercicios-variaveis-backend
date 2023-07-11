let CapitalInicial = 60000;
let Montante = 90000;
let numeroMeses = 24;

let i = (Montante / CapitalInicial) ** (1 / numeroMeses) - 1;

console.log(`O seu financiamento de ${CapitalInicial} reais teve uma taxa de juros de ${(i * 100).toFixed(3)}%, pois após ${numeroMeses} meses você teve que pagar ${Montante} reais.`);