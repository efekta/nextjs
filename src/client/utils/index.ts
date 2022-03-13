export const randomNumberFromMinToMax = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));

export const getNumericFormatWithSpaces = (price: number): string => price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

export const getDotInsteadOfComma = (number: number) => number.toString().replace(/\./, ',');

export const getCurrentYear = () => new Date().getFullYear();

export const emailPattern = {
    value: new RegExp('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$', 'ig'),
    message: 'Enter a valid email address.',
};

export const phoneRegExp = /\+7\([0-9]{3}\)-[0-9]{3}-[0-9]{2}-[0-9]{2}/;

export const clearInput = (e) => (e.target.parentElement.querySelector('input').value = '');
