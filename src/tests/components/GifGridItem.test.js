import { shallow } from 'enzyme'
import React from 'react'
import GifGridItem from '../../components/GifGridItem'

/* eslint-disable */
describe('Puebas al componente <GifGridItem />', () => {
  const url = 'https://localhost/img.png'
  const title = 'texto del titulo para la imagen de las pruebas'
  const wrapper = shallow(<GifGridItem url={url} title={title} />)

  test('Snapshot del componente', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('debe tener un parrafo con el titulo', () => {
    const parrafo = wrapper.find('p')
    expect(parrafo.text().trim()).toBe(title)
  })

  test('debe tener en la imagen la url y el alt igual al de los props', () => {
    const img = wrapper.find('img')
    expect(img.prop('src')).toBe(url)
    expect(img.prop('alt')).toBe(title)
  })

  test('debe tener la clase animate__fadeIn', () => {
    const div = wrapper.find('div')
    expect(div.prop('className').includes('animate__fadeIn')).toBe(true)
  })
})
