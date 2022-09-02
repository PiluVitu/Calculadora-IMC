const submitButton = document.querySelector('.mainCard button')
const closeButton = document.querySelector('.popUpCard button')
const weight = document.querySelector('#peso')
const height = document.querySelector('#altura')
const textPopUpCard = document.querySelector('.popUpCard h2')
const popUpCard = document.querySelector('.popUpCardWrapper')
const textError = document.querySelector('.textError')

submitButton.addEventListener('click', submit)
closeButton.addEventListener('click', showAndClosePopUp)

function submit(event) {
  event.preventDefault()
  let pesoTeste = Number(weight.value)
  let alturaTeste = Number(height.value)
  const calcImc = (pesoTeste / alturaTeste ** 2).toFixed(1)
  if (calcImc >= 10) {
    showAndClosePopUp()
    textPopUpCard.innerHTML = `Seu IMC é de ${calcImc}`
  } else {
    showAndCloseTextError()
    setTimeout(showAndCloseTextError, 2000)
  }
}
function showAndCloseTextError() {
  textError.classList.toggle('open')
}
function showAndClosePopUp() {
  popUpCard.classList.toggle('open')

  weight.value = ''
  height.value = ''
}
