function oneThroughTwenty(numeros) {

  let recebe = []
  for(let cont = 1; cont <= numeros; cont++){
    recebe.push(cont)
  } 
  
  return recebe

}console.log(oneThroughTwenty(20))

//call function oneThroughTwenty

function evensToTwenty(numerosPares) {
    
  let recebeNumerosPares = []
  for(let cont = 1; cont <= numerosPares; cont++){

    if(cont % 2 == 0){
      recebeNumerosPares.push(cont)
    }
  }

  return recebeNumerosPares

}console.log(evensToTwenty(20))

//call function evensToTwenty

function oddsToTwenty(numerosImpares) {
    
  let recebeNumerosImpares = []
  for(let cont = 1; cont <= numerosImpares; cont++){

    if(cont % 2 == 1){
      recebeNumerosImpares.push(cont)
    }
  }

  return recebeNumerosImpares

}console.log(oddsToTwenty(20))

//call function oddsToTwenty

function multiplesOfFive(numerosMultiplos) {
  
  let recebeNumeros = []
  for(let i = 5; i <= numerosMultiplos; i += 5){
    recebeNumeros.push(i)
  }

  return recebeNumeros

}console.log(multiplesOfFive(100))

//call function multiplesOfFive

function squareNumbers(numerosQuadrados) {
  
  let recebeNumeros = []
  for(let cont = 1; cont <= numerosQuadrados; cont++){
    recebeNumeros.push(cont ** 2)
  }

 return recebeNumeros
    
}console.log(squareNumbers(10))

//call function squareNumbers

function countingBackwards(numerosContrarios) {
  
  let recebeNumeros = []
  for(let i = numerosContrarios; i > 0; i--){
    recebeNumeros.push(i)
  }

  return recebeNumeros

}console.log(countingBackwards(20))

//call function countingBackwards

function evenNumbersBackwards(numerosPares) {
  
  let recebeNumerosPares = []
  for(let i = numerosPares; i > 0; i--){
    if(i % 2 == 0){
      recebeNumerosPares.push(i)
    }
  }

  return recebeNumerosPares
  
}console.log(evenNumbersBackwards(20))

//call function evenNumbersBackwards

function oddNumbersBackwards(numerosImpares) {
  
  let recebeNumerosImpares = []
  for(let i = numerosImpares; i > 0; i--){
    if(i % 2 == 1){
      recebeNumerosImpares.push(i)
    }
  }
  
  return recebeNumerosImpares

}console.log(oddNumbersBackwards(20))

//call function oddNumbersBackwards

function multiplesOfFiveBackwards(numerosMultiplos) {
    
  let recebeNumeros = []
  for(let cont = numerosMultiplos; cont > 0; cont -= 5){
    recebeNumeros.push(cont)
  }

  return recebeNumeros

}console.log(multiplesOfFiveBackwards(100))

//call function multiplesOfFiveBackwards

function squareNumbersBackwards(numerosQuadrados) {
  
  let recebeNumeros = []
  for(let i = numerosQuadrados; i > 0; i--){
    recebeNumeros.push(i ** 2)
  }
 
  return recebeNumeros

}console.log(squareNumbersBackwards(10))

//call function squareNumbersBackwards
