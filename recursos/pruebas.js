const v = [
    {id: 1, nombre: 'n1'}, 
    {id: 5, nombre: 'n2'}, 
    {id: 3, nombre: 'n3'},
    {id: 7, nombre: 'n4'} 
]

const csv = (array, sep = ',') => {
    const fila = array.map((element) => Object.values(element).join(sep)).forEach(f => console.log(f))
}

console.log(csv(v))