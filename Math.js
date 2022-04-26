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
    let Tipo = ['triangulo','retangulo', 'circulo', 'trapezio', 'losango'];
    let res = 0;
    if (tipoArea === Tipo[0]){

        res = (Medidas[0] * Medidas[1])/2; //Area triangulo

    }else if (tipoArea === Tipo[1]){

        res = Medidas[0] * Medidas ;//Area retangulo
        
    }else if (tipoArea === Tipo[2]){

        res = Math.pow(Medidas[0],2)*PI;//Area circulo
        
    }else if (tipoArea === Tipo[3]){

        res = ((Medidas[0] + Medidas[1])*Medidas[2])/2;//Area trapezio
        
    }else if (tipoArea === Tipo[4]){

        res = (Medidas[0] * Medidas[1])/2;//Area losango
        
    }
    return res;

}