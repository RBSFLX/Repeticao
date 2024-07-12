let v = parseInt(prompt("Digite a quantidade de valores a serem lidos: ")), p = 0, n = 0, s = 0

for (let i = 0; i < v; i++) {
    let r = parseInt(prompt("Digite o valor: "))
    s = + r
    if (r > 0) {
        p++
    }
    if (r < 0) {
        n++
    }
}

let ma = s / v, pp = (p / v) * 100, pn = (n / v) * 100

alert("Números lidos: " + v + ". Media: " + ma + ". N de valores positivos: " + p + ". N de valores negativos: " + n + ". % de positivos: " + pp + ". % de negativos: " + pn)