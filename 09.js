let A = parseInt(prompt("digite um inicial A: ")), R = parseInt(prompt("Digite umm razão R: ")), j = ""

for (let i = 0; i < 10; i++) {
    j += `${A}, `
    A *= R
}

alert(j)