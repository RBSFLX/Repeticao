let maiorAltura = 0, menorAltura = 100

for (let p = 1; p <= 3; p++) {

    let h = parseFloat(prompt())

    if (h > maiorAltura) {
        maiorAltura = h
    }

    if (h < menorAltura) {
        menorAltura = h
    }

}

alert("Maior altura: " + maiorAltura + ", menor altura: " + menorAltura)