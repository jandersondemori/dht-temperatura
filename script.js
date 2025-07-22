const temperaturas = [
    { id: 1, temperatura: 23.9 },
    { id: 2, temperatura: 25.9 },
    { id: 3, temperatura: 26.9 },
    { id: 4, temperatura: 29.9 },
]
function simularLeitura() {
    const numeroSorteado = Math.floor (Math.random() * temperaturas.length)

    const tempSorteada = temperaturas [numeroSorteado].temperatura
    const temperaturaPagina = document.getElementById("temperatura")
    temperaturaPagina.textContent = tempSorteada
}