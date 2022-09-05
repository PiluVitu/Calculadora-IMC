const mainPage = {
  submitButton: document.querySelector('.mainCard button'),
  form: document.querySelector('form'),
  weight: document.querySelector('#peso'),
  height: document.querySelector('#altura'),
  textError: document.querySelector('.textError')
}

const popUp = {
  closeButton: document.querySelector('.popUpCard button'),
  text: document.querySelector('.popUpCard h2'),
  card: document.querySelector('.popUpCardWrapper'),
  open() {
    this.card.classList.toggle('open')
  },
  close() {
    this.card.classList.toggle('open')

    mainPage.weight.value = ''
    mainPage.height.value = ''
  }
}
popUp.closeButton.onclick = () => popUp.close()

mainPage.form.onsubmit = event => {
  event.preventDefault()
  let pesoTeste = Number(mainPage.weight.value)
  let alturaTeste = Number(mainPage.height.value)
  const calcImc = IMC(pesoTeste, alturaTeste)
  if (calcImc >= 10) {
    popUp.text.innerText = `Seu IMC é de ${calcImc}`
    popUp.open()
  } else {
    showAndCloseTextError()
    setTimeout(showAndCloseTextError, 2000)
  }
}
function IMC(weight, height) {
  return (weight / height ** 2).toFixed(1)
}
function showAndCloseTextError() {
  mainPage.textError.classList.toggle('open')
}
