import '@testing-library/jest-dom'
import React from 'react'
import { shallow } from 'enzyme'
import GifExpertApp from '../GifExpertApp'

/* eslint-disable */
describe('pruebas al componente <GifExpertApp/>', () => {
  test('snapshot al componente', () => {
    const wrapper = shallow(<GifExpertApp />)
    expect(wrapper).toMatchSnapshot()
  })

  test('should mostrar una lista de componentes', () => {
    const categories = ['Killua', 'Mob', 'Saitama']
    const wrapper = shallow(<GifExpertApp defaultCategories={categories} />)
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('GifGrid').length).toBe(categories.length)
  })
})
