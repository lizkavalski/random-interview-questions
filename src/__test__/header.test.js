import React from 'react';
import { shallow, mount } from 'enzyme';
import { render } from '@testing-library/react';
import App from '../App';
import Header from '../component/Header'
import RandomQuestion from '../component/randomQuestion'

describe('render the Header', () => { 
  it('renders the Header', () => {
    const wrapper = mount(<Header/>);
    expect(wrapper).toBeTruthy();
  })
  it('Show the title', () => {
    const {getByText} = render(<Header/>);
    let title =getByText(/Interview Prep!/i)
    expect(title).toBeInTheDocument();
  })
    

});