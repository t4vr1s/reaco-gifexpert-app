import { getGifs } from '../../helpers/getGifs'
import '@testing-library/jest-dom'

/* eslint-disable */
describe('Pruebas a la funcion getGifs', () => {
  test('Debe ser igual al tamaño del array 10 elementos', async () => {
    const gifs = await getGifs('One punch man')
    expect(gifs.length).toBe(10)
  })

  test('Debe ser igual a cero elementos', async () => {
    const gifs = await getGifs('')
    expect(gifs.length).toBe(0)
  })
})
