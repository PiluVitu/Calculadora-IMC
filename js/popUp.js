import { mainPage } from './main.js'

export const popUp = {
  closeButton: document.querySelector('.popUpCard button'),
  escKeyboard: '',
  text: document.querySelector('.popUpCard h2'),
  card: document.querySelector('.popUpCardWrapper'),
  open() {
    popUp.card.classList.add('open')
  },
  close() {
    popUp.card.classList.remove('open')

    mainPage.weight.value = ''
    mainPage.height.value = ''
  }
}
popUp.closeButton.onclick = () => popUp.close()

window.addEventListener('keydown', event => {
  if (event.key == 'Escape') {
    popUp.close()
  }
})
