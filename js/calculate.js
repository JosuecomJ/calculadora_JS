export default function calculate() {
  const resultInput = document.getElementById('result') // essa parte não existia na função
  resultInput.value = 'ERROR'
  resultInput.classList.add('error')
  const result = eval(input.value) // como temos controle do que pode ser digitado, podemos usar o eval sem se preocupar com a possibilidade de codigos JS serem usados atraves do front-end
  resultInput.value = result
  resultInput.classList.remove('error')
}

// FUNÇÃO ORIGINAL:
// HOUVE A ADIÇÃO DA  const resultInput = document.getElementById('result')  NA NOVA VERSÃO, POIS A ORIGINAL CHAVAMA O VALOR DE resultInput POREM NÃO O POSSUIA FORA DA PAGINA INDEX

/* function calculate() {
  resultInput.value = 'ERROR'
  resultInput.classList.add('error')
  const result = eval(input.value) // como temos controle do que pode ser digitado, podemos usar o eval sem se preocupar com a possibilidade de codigos JS serem usados atraves do front-end
  resultInput.value = result
  resultInput.classList.remove('error')
} */