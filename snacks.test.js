const { getInitials , createSlug , avarage , createSlug2 } = require('./snacks.js')

test('La funzione getInitials restituisce le iniziali di un nome completo.', () => {
    const initials = getInitials("ernesto","costanzo")
    expect(initials).toBe("ec")
 })

 
 test('La funzione createSlug restituisce una stringa in lowercase.', () => { 
    const slug = createSlug('ERNESTO')
    expect(slug).toBe('ernesto')
  })

  test('La funzione average calcola la media aritmetica di un array di numeri.' , () => {
   const media = avarage([ 1 , 2 , 3])
   expect(media).toBe(2)
  })

  test('La funzione createSlug2 sostituisce gli spazi con -.', () => {
   const slug = createSlug2('questo è un test')
   expect(slug).toBe("questo-è-un-test")
   })