import React from "react";
import Hello from "../Hello";
import { render, fireEvent } from '@testing-library/react';

test('should be render Hello text', () => {
   const { getByText, debug } = render(<Hello />);
   // There are three groups of text
   // 1. getBy    => if the object you want to obtain is null ,it would throw an error
   // 2. queryBy  => it is used to check if some vale is null
   // 3. findBy   => it is used to get elements asynchronous
   debug();
   const helloText = getByText('Hello');
   expect(helloText).toBeTruthy();
   expect(helloText.tagName).toBe('H1');
   expect(helloText.textContent).toBe('Hello');
});

test('should be render This is a text', () => {
    const { getByTestId } = render(<Hello />);
    const helloThisIsText = getByTestId("text-id");
    expect(helloThisIsText).toBeTruthy();
    expect(helloThisIsText.tagName).toBe('P')
});

test('should be render button click', ()=> {
    const { getByRole } = render(<Hello />);
    const myButton = getByRole("button");
    fireEvent.click(myButton);
});

test('should be render input change', ()=> {
    const { getByRole } = render(<Hello />);
    const myInput = getByRole("textbox");
    const myName = 'This is my name';
    expect(myInput).toHaveValue('');
    fireEvent.change(myInput,{ target:{value: myName}})
    expect(myInput).toHaveValue(myName);
});