const edades = [ 22, 12, 22, 15, 12, 18, 20, 15, 22, 18, 7]
const tabla = edades.reduce((a, i) => {
    !a[i] ? a[i] = 1 : a[i] += 1
    return a
}, {})

console.log(tabla)