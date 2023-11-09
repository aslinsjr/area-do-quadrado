const ladoQuadrado = document.querySelector("#side-input");
const submitBtn = document.querySelector("#form-container");
const ladoUm = document.querySelector("#lado1");
const ladoDois = document.querySelector("#lado2");
const valorResultado = document.querySelector("#resultado");
const squareContainer = document.querySelector(".square-container");


submitBtn.addEventListener("submit", (e) => {
    e.preventDefault();
    const valorLado = ladoQuadrado.value;

    ladoUm.innerHTML = valorLado;
    ladoDois.innerHTML = valorLado;

    const resultado = valorLado * valorLado;

    valorResultado.innerHTML = resultado;

    squareContainer.classList.add("active")

    
});