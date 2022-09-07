import { popUp } from './popUp.js'
import { CalculateIMC } from './utils.js'
import { showAndCloseTextError, inputsFocusToCloseTextError} from './textError.js'

export const mainPage = {
  submitButton: document.querySelector('.mainCard button'),
  form: document.querySelector('form'),
  weight: document.querySelector('#peso'),
  height: document.querySelector('#altura'),
  textError: document.querySelector('.textError')
}

mainPage.form.onsubmit = event => {
  event.preventDefault()

  let pesoTeste = Number(mainPage.weight.value)
  let alturaTeste = Number(mainPage.height.value)
  const calcImc = CalculateIMC(pesoTeste, alturaTeste)
  if (calcImc >= 10) {
    popUp.text.innerText = `Seu IMC é de ${calcImc}`
    popUp.open()
  } else {
    showAndCloseTextError.open()
    inputsFocusToCloseTextError()
  }
}
