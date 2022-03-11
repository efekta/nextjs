export const randomNumberFromMinToMax = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));

export const getNumericFormatWithSpaces = (price: number): string =>
    price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

export const getDotInsteadOfComma = (number: number) => number.toString().replace(/\./, ',');

export const getCurrentYear = () => new Date().getFullYear();

export const emailPattern = {
    value: new RegExp('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$', 'ig'),
    message: 'Enter a valid email address.',
};

export const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const clearInput = e => e.target.parentElement.querySelector('input').value = '';

export const capitalize = (str: string) => {
    if (!str) return str;

    return str[0].toUpperCase() + str.slice(1);
};

export const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
