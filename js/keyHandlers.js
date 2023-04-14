const input = document.getElementById('input')
const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]
import calculate from "./calculate.js"

export function handleButtonPress(ev) {
  const value = ev.currentTarget.dataset.value
  input.value += value
}

// VARIAVEL ADICONANA : const input = document.getElementById('input')

// ORIGINAL
/* function () {
    const value = charKeyBtn.dataset.value
    input.value += value
  })
}) */

export function handleClearButton() {
  input.value = ''
  input.focus()
}


// PARA FUNÇÃO handleTyping FOI NESSARIO ADICIONAR A VARIAVEL GLOBAL allowedKeys NO INICIO DO ARQUIVO, TAMBÉM FOI NECESSARIO IMPORTAR A FUNÇÃO calculate 

export function handleTyping(ev) {
  ev.preventDefault()
  if (allowedKeys.includes(ev.key)) {
    input.value += ev.key
    return
  } if (ev.key === 'Backspace') {
    input.value = input.value.slice(0, -1)

  }
  if (ev.key === 'Enter') {
    calculate()

  }
}