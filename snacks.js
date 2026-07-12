
function getInitials(x , y) {
    const prima_lettera = x.charAt(0).toLowerCase()
    const seconda_lettera = y.charAt(0).toLowerCase()
    const parola = prima_lettera.concat(seconda_lettera)
    return parola
}

function createSlug(stringa) {
    const soluzione = stringa.toLowerCase()
    return soluzione
}

function avarage(array) {
    const somma = array.reduce(( acc , curr) => acc + curr , 0) 
    const soluzione = somma / array.length
    return soluzione
}

function createSlug2(stringa){
   return stringa.toLowerCase().replaceAll(" ", "-")
}


module.exports = {
    getInitials,
    createSlug,
    avarage,
    createSlug2
}