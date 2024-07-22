function calcularNivel(quantidadeVitorias, quantidadeDerrotas) {
    const saldoRankeadas = quantidadeVitorias - quantidadeDerrotas;
    let nivel;
    if (quantidadeVitorias < 10) {
        nivel = "Ferro";
    } else if (quantidadeVitorias >= 11 && quantidadeVitorias <= 20) {
        nivel = "Bronze";
    } else if (quantidadeVitorias >= 21 && quantidadeVitorias <= 50) {
        nivel = "Prata";
    } else if (quantidadeVitorias >= 51 && quantidadeVitorias <= 80) {
        nivel = "Ouro";
    } else if (quantidadeVitorias >= 81 && quantidadeVitorias <= 90) {
        nivel = "Diamante";
    } else if (quantidadeVitorias >= 91 && quantidadeVitorias <= 100) {
        nivel = "Lendário";
    } else if (quantidadeVitorias >= 101) {
        nivel = "Imortal";
    }
    console.log("O Herói tem de saldo de " + saldoRankeadas + " está no nível " + nivel + "."

    )
}
calcularNivel(25,5)
