function toggleMode() {
  const html = document.documentElement
  //Faz o funcionamento do botão de modo claro e escuro
  html.classList.toggle("light")
  //Pegar a tag img
  const img = document.querySelector("#profile img")
  //Substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    //Se tiver sem o light mode, manter imagem normal
    img.setAttribute("src", "./assets/avatar.png")
  }
}
