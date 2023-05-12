let button = document.getElementById('buttonCriar');
let sectionItens = document.getElementById('itensAdd');
let itens = false

const calcMedia = () => {
  if(itens == false) {
    for (let i = 0; i < 10; i++) {
      itens = true
      let item = document.createElement('p')
      item.innerHTML = i
      sectionItens.appendChild(item)
      }
    }
}

button.addEventListener("click", () => calcMedia())

