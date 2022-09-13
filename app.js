const container = document.querySelector(".container");
const colorInput = document.getElementById("colorInput");
const clearScreenBtn = document.getElementById("cls");
const range = document.getElementById("range");
const label = document.querySelector("label");

let canvasSize = 16;
let color = colorInput.value;
label.innerHTML = `${canvasSize} x ${canvasSize}`;
range.value = canvasSize;

range.addEventListener("change", function (){
    canvasSize = range.value;
    label.innerHTML = `${canvasSize} x ${canvasSize}`;
    createDivs();
    createGrid();
    clearScreen();
});

window.onload = createDivs();
window.onload = createGrid();

colorInput.addEventListener("change", () =>
    color = colorInput.value
);

function createDivs() {
    for (let i = 0; i < Math.pow(canvasSize, 2); i++) {
        const div = document.createElement("div");
        div.addEventListener("mouseover", () =>
            div.style.backgroundColor = color
        );
        div.classList.add("divGridItem");
        container.appendChild(div);
    }
}

function createGrid() {
    container.style.display = "grid";
    container.style.gridTemplateColumns = `repeat(${canvasSize}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${canvasSize}, 1fr)`;
}

clearScreenBtn.addEventListener("click", () =>
    clearScreen()
);

function clearScreen(){
    for (let j = 0; j < Math.pow(canvasSize, 2); j++) {
        const allDivs = container.querySelectorAll("div");
        allDivs[j].style.backgroundColor = "white";
    }
}