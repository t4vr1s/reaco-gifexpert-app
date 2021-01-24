import '@testing-library/jest-dom'
import React from 'react'
import { shallow } from 'enzyme'
import { AddCategory } from '../../components/AddCategory'

/* eslint-disable */
describe('Pruebas en <AddCategory>', () => {
  const setCategories = jest.fn()
  let wrapper = shallow(<AddCategory setCategories={setCategories} />)

  beforeEach(() => {
    jest.clearAllMocks()
    wrapper = shallow(<AddCategory setCategories={setCategories} />)
  })

  test('should de mostrar correctamente el componente', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('should cambiar el valor del input', () => {
    const input = wrapper.find('input')
    const value = 'Rick and Morty'
    input.simulate('change', { target: { value } })
    expect(wrapper.find('p').text().trim()).toBe(value)
  })

  test('no debe enviar la información con submit ', () => {
    wrapper.find('form').simulate('submit', { preventDefault: () => { } })
    expect(setCategories).not.toHaveBeenCalled()
  })

  test('debe llamar el setCategories y limpiar la caja de texto', () => {
    const input = wrapper.find('input')
    const value = 'Rick and Morty'
    input.simulate('change', { target: { value } })
    wrapper.find('form').simulate('submit', { preventDefault: () => { } })
    expect(setCategories).toHaveBeenCalled()
    expect(setCategories).toHaveBeenCalledTimes(1)
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function))

    expect(wrapper.find('input').text().trim()).toBe('')
    expect(wrapper.find('input').prop('value')).toBe('')
  })
})
