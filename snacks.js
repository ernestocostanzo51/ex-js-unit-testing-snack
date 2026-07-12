
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



module.exports = {
    getInitials,
    createSlug
}