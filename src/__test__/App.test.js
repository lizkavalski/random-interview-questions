import React from 'react';
import { shallow, mount, render } from 'enzyme';
// import { render } from '@testing-library/react';
import App from '../App';
import Header from '../component/Header'
import RandomQuestion from '../component/randomQuestion'

describe('render the app', () => { 
  it('renders the App', () => {
    const wrapper = mount(<App/>);
    expect(wrapper).toBeTruthy();
  })
  it('renders the Header', () => {
    const wrapper = mount(<Header/>);
    expect(wrapper).toBeTruthy();
  })
  it('renders the RandomQuestion', () => {
    const wrapper = mount(<RandomQuestion/>);
    expect(wrapper).toBeTruthy();
  })
    

});

