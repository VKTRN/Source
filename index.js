const h      = document.getElementById('text')
const button = document.getElementById('button')

const changeText = (n,c) => {
  const event = new CustomEvent('textChanged', {detail: {text: n, textColor:c}})

  h.dispatchEvent(event)
}

h.addEventListener('textChanged', (e) => {
  h.textContent = e.detail.text
  h.style.color = e.detail.textColor
})

button.addEventListener('click', () => changeText("Event fired!", "red"))