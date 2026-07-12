const { getInitials } = require('./snacks.js')

test('La funzione getInitials restituisce le iniziali di un nome completo.', () => {
    const initials = getInitials("ernesto","costanzo")
    expect(initials).toBe("ec")
 })