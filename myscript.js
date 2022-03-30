document.body.onload = addElement

const button = document.querySelector("button")
const grid = document.querySelector(".gridContainer")


function addElement() {
    for (let i = 0; i < 256; i++){
        const div = document.createElement("div")
        div.classList.add("square")
        grid.appendChild(div)
}}

const square = document.querySelector("div")
square.addEventListener('mouseover', function(event) {
    event.target.classList.replace("square", "change")
})


button.addEventListener('click', reset)
function reset(){
    grid.innerHTML = "";
    grid.style.setProperty("grid-template-columns", `repeat(16, 2fr)`);
    grid.style.setProperty("grid-template-rows", `repeat(16, 2fr)`);
    addElement()
}