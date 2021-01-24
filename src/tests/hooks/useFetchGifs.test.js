import '@testing-library/jest-dom'
import { useFetchGifs } from '../../hooks/useFetchGifs'
import { renderHook } from '@testing-library/react-hooks'

describe('Pruebas al componente <useFetchGifs />', () => {
  test('should retornar el estado inicial', async () => {
    // const { data, loading } = useFetchGifs('One Punch');
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs('One Punch Man')
    )
    const { data, loading } = result.current
    await waitForNextUpdate()
    expect(data).toEqual([])
    expect(loading).toBe(true)
    // expect(loading).toBeTruthy();
  })

  test('should retornar un arreglo de imagenes y el loading en false', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs('One Punch Man')
    )
    await waitForNextUpdate()
    const { data, loading } = result.current
    expect(data.length).toBe(10)
    expect(loading).toBe(false)
  })
})
