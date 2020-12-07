import React from 'react';
import { shallow, mount, render } from 'enzyme';
// import { render } from '@testing-library/react';
import App from '../App';
import Header from '../component/Header'
import RandomQuestion from '../component/randomQuestion'

describe('render the compontents', () => { 
  it('renders the Header', () => {
    const wrapper = mount(<Header/>);
    const title='Interview Prep!';
    expect(wrapper.find('#title')).toIncludeText(title);
  });

});

