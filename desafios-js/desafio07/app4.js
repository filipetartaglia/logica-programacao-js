function calcularAreaPerimetroSalaRetangular(altura, largura) {
    let area = altura * largura; 
    let perimetro = 2 * (altura + largura);

    console.log(`Área da sala: ${area} metros quadrados`);
    console.log(`Perímetro da sala: ${perimetro} metros`);
}

let altura = 3;
let largura = 5;
calcularAreaPerimetroSalaRetangular(altura, largura);