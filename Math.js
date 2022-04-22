const PI = 3.141592;
const GRAVIDADE = 9.807;
// Constantes que definidas para o uso nas funções
 //função de soma para múltiplos números
function SomaVetor (vetor){
    let res = 0;
    for(let i=0;vetor.length <i; i++){
        res += vetor[i];
    }
    return res;
}
//função de subtração sucessiva do primeiro número no vetor
function SubtraiVetor (vetor){
    let res = vetor[0];
    for(let i=0;vetor.length <i; i++){
        res -= vetor[i];
    }
    return res;
}
/*Função para calculo da área de todos os Tipos
String tipoArea: triangulo, retangulo, circulo, trapezio, losango
Vetor Medidas: 
---triangulo---
Medidas[base, altura];
---retangulo---
Medidas[base, altura];
---circulo---
Medidas[raio];
---trapezio---
Medidas[baseMenor, baseMaior, altura];
---losango---
Medidas[diagonalMenor, diagonalMaior];
*/
function Area (tipoArea,Medidas){

}