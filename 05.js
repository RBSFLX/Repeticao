let qp = 0, qn = 0, par = 0, impar = 0, sp = 0, sg = 0

for (let i = 1; i != 0;) {
    let n = parseInt(prompt())
    qn++
    if (n % 2 !== 0) {
        impar++

    }
    else {
        qp++
        par++
        sp += n
    }
    sg += n
    i = n
}

alert("Qnt N par: " + par + " Qnt N impar: " + impar + " Media par: " + sp / qp + " Media geral: " + sg / qn)