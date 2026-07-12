const { getInitials , createSlug } = require('./snacks.js')

test('La funzione getInitials restituisce le iniziali di un nome completo.', () => {
    const initials = getInitials("ernesto","costanzo")
    expect(initials).toBe("ec")
 })

 
 test('La funzione createSlug restituisce una stringa in lowercase.', () => { 
    const slug = createSlug('ERNESTO')
    expect(slug).toBe('ernesto')
  })