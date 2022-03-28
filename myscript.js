document.body.onload = addElement

function addElement() {
    for (let i = 0; i < 256; i++){
        const grid = document.querySelector(".gridContainer")
        const div = document.createElement("div")
        div.classList.add("square")
        grid.appendChild(div)
}}
