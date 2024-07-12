let n = parseInt(prompt()), t = ""

for (let i = 0; i <= 10; i++) {
    t += `${i} x ${n} = ${n * i}, `
}

alert(t)