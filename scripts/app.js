function init() {


  const title = document.querySelector('h1')
  const titleText = '<h1>Hello World!</h1>'
  const titleSpeed = 100
  let i = 0

  function writingText() {

    if (i <= titleText.length) {
      title.innerHTML += titleText.charAt(i)
      i++
      setTimeout(writingText, titleSpeed)
    }

  }


  writingText()



  // ! end of init
}

window.addEventListener('DOMContentLoaded', init)