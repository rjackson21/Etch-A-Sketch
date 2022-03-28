document.body.onload = addElement

function addElement() {
    for (let i = 0; i < 256; i++){
        var grid = document.querySelector(".gridContainer")
        var div = document.createElement("div")
        div.classList.add("square")
        grid.appendChild(div)
}}

const square = document.querySelector("div")
square.addEventListener('mouseover', function(event) {
    event.target.classList.replace("square", "change")
})