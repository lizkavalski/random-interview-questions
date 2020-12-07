import React from 'react';
import { shallow, mount, render } from 'enzyme';
// import { render } from '@testing-library/react';
import App from '../App';
import Header from '../component/Header'
import RandomQuestion from '../component/randomQuestion'

describe('render the app', () => { 
  it('renders the App', () => {
    const wrapper = render(<App/>);
    expect(wrapper).toBeTruthy();
  })
  it('renders the Header', () => {
    const wrapper = render(<Header/>);
    expect(wrapper).toBeTruthy();
  })
  it('renders the RandomQuestion', () => {
    const wrapper = render(<RandomQuestion/>);
    expect(wrapper).toBeTruthy();
  })
    

});

