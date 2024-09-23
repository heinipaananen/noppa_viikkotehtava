

const click = () => {
    let luku = Math.floor(Math.random()*6) + 1
    let kuva = document.getElementById('kuva')
    kuva.src = "./img/" + luku + ".png"

}

document.getElementById('dice').addEventListener('click', click)