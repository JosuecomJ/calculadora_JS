export default function (ev) {
  const resultInput = document.getElementById('result')
  const button = ev.currentTarget
  if (button.innerText === 'Copy') {
    button.innerText = 'Copied'
    button.classList.add('success')
    window.navigator.clipboard.writeText(resultInput.value)
  } else {
    button.innerText = 'Copy'
    button.classList.remove('success')
  }

}

// FUNÇÃO ORIGINAL, FOI NECESSARIO ADICIONAR A VARIAVEL QUE CAPTURA O resultInput , const resultInput = document.getElementById('result')

/* function (ev) {
  const button = ev.currentTarget
  if (button.innerText === 'Copy') {
    button.innerText = 'Copied'
    button.classList.add('success')
    window.navigator.clipboard.writeText(resultInput.value)
  } else {
    button.innerText = 'Copy'
    button.classList.remove('success')
  }

} */