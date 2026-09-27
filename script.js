const jardin = document.querySelector(".jardin");

function crearParticula() {

    const particula = document.createElement("div");

    particula.style.position = "absolute";
    particula.style.width = "4px";
    particula.style.height = "4px";
    particula.style.borderRadius = "50%";

    particula.style.background = "#ffd86b";

    particula.style.boxShadow =
        "0 0 8px #ff9d00, 0 0 15px #ff7300";

    particula.style.left =
        Math.random() * 100 + "%";

    particula.style.top =
        Math.random() * 100 + "%";

    particula.style.animation =
        "particula 3s linear forwards";

    jardin.appendChild(particula);

    setTimeout(() => {
        particula.remove();
    }, 3000);
}

setInterval(crearParticula, 250);