import { getUser, getUsuarioActivo } from "../../base/05-funciones"

describe('Pruebas en 05-funcionoes', () => {

    test('getUser debe de retornar un objeto', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        expect(user).toEqual(userTest);
    })

    test('getUsuarioActivo debe de retornar un objeto', () => {
        const nombre = 'papi'
        const userTest = {
            uid: 'ABC567',
            username: nombre
        }

        const user = getUsuarioActivo(nombre);

        expect(user).toEqual(userTest);
    })
    
})