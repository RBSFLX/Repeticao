let A = parseInt(prompt()), R = 1, t = "", s, a
a = A
while (A > 0) {
    R *= A
    if (A != 1) {
        t += `${A} X `
    }
    else {
        t += `${A}`
    }
    A--
}
s = `${a}! = ${t} = ${R}`
alert(s)