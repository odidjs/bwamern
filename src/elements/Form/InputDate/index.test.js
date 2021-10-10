import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import InputDate from './index.js';

class TestInput extends React.Component {

    state = {
        value: {
            startDate : new Date(),
            endDate : new Date(),
            key: "selection"
        }
    };

    handleChange = e => {
        this.setState.value({value: e.target.value});
    };

    render() {
        return (
            <InputDate 
            max={30}
            onChange={this.handleChange}
            name="value"
            value={this.state.value}
            />
        )
    }
};


    const setup = () => {
        const {container} = render(<TestInput />)
        const wrapper = container.querySelector(`.input-date`)
        const input = container.querySelector(`input.form-control`)

        return {
            container, 
            wrapper,
            input
        };
    };

test("Should has wrapper with classname .input-date", () => {
    const { wrapper } = setup();

    expect(wrapper).toBeInTheDocument();
});

test("Should has tag <input> and have .form-control", () => {
    const {input} = setup();

    expect(input).toBeInTheDocument();
}); 


test("Should has tag <input> and have .form-control", () => {
    const {container, input} = setup();
    screen.debug();
    fireEvent.click(input,{button:1});
    const dataPickerWrapper = container.querySelector(`.data-range-wrapper`);
    

    expect(dataPickerWrapper).toBeInTheDocument();
});