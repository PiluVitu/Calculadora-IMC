import { mainPage } from "./main.js"

const showAndCloseTextError =  {
  open() { mainPage.textError.classList.add('open')},
  close() { mainPage.textError.classList.remove('open')}
}
const inputsFocusToCloseTextError = () => {
  mainPage.weight.addEventListener('focus', showAndCloseTextError.close)
  mainPage.height.addEventListener('focus', showAndCloseTextError.close)
}

export {showAndCloseTextError, inputsFocusToCloseTextError}