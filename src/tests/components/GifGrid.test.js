import '@testing-library/jest-dom'
import React from 'react'
import { shallow } from 'enzyme'
import GifGrid from '../../components/GifGrid'
import { useFetchGifs } from '../../hooks/useFetchGifs'

/* eslint-disable */
jest.mock('../../hooks/useFetchGifs')

describe('Pruegas al componente < GifGrid />', () => {
  const category = 'One Punch Man'

  test('Snapshot inicial del componente', () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true
    })

    const wrapper = shallow(<GifGrid category={category} />)
    expect(wrapper).toMatchSnapshot()
  })

  test('should mostrar los items cuando se cargan imagenes useFetchGifs', () => {
    const gifs = [
      {
        id: 'abc',
        url: 'https://localhost/ruta/imagen.png',
        title: 'titulo de test'
      },
      {
        id: 'def',
        url: 'https://localhost/ruta/imagen-nueva.png',
        title: 'Imagen nueva'
      }
    ]

    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false
    })
    const wrapper = shallow(<GifGrid category={category} />)
    expect(wrapper.find('p').exists()).toBe(false)
    expect(wrapper.find('GifGridItem').length).toBe(gifs.length)
  })
})
