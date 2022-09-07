import { mainPage } from "./main.js"

const showAndCloseTextError =  {
  open() { mainPage.textError.classList.add('open')},
  close() { mainPage.textError.classList.remove('open')}
}
const inputsFocusToCloseTextError = () => {
  mainPage.weight.oninput = () => showAndCloseTextError.close()
  mainPage.height.oninput = () => showAndCloseTextError.close()
}

export {showAndCloseTextError, inputsFocusToCloseTextError}