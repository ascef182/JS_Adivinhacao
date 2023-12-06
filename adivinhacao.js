//var numeroSecreto = 581 (quando defino o numero)

//o computador gerando o número (parse= analise) (int = inteiro) (math = matemática) (random = aleatório)(0 até 1 mas exclui o 1, multiplica por 10 pra virar 0 ate 9, multiplica 100 0 a 99, multiplica 1000, 0 a 999, 1001 para pegar o 1000)
var numeroSecreto = parseInt(Math.random() * 100);

// enquanto o chute for diferente do número secreto

while(chute != numeroSecreto){
  
  var chute = prompt('Digite um número entre 0 e 100')

  //se o chute for igual ao número        secreto
  if(chute == numeroSecreto){
  alert('Acertou!')
  } else if(chute > numeroSecreto){
  alert('Errou... o número secreto é menor')
  } else if(chute < numeroSecreto){
  alert('Errou... o número secreto é maior')
  }
}