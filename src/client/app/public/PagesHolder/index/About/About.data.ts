export interface aboutData {
    id: number;
    button: string;
    buttonText: string;
    icon: string;
    title: string;
    description: string;
    modal: string;
}

export const aboutData = [
    {
        id: 0,
        title: 'Инновация',
        icon: 'sim',
        description: 'Виртуальная eSIM это новая технология, которая не требует отдельного SIM-слота в смартфоне,\n' +
            '                            ваш смартфон может иметь только 1 слот для При этом виртуальная eSIM функционирует\n' +
            '                            как обычная SIM-карта. Перед оформлением eSIM обя',
        button: 'secondary',
        buttonText: 'Моё устройство подойдёт?',
        modal: ''
    },

    {
        id: 1,
        title: 'Удобство',
        icon: 'phone',
        description: 'В отличие от обычной SIM-карты, с eSIM не нужно переставлять SIM-карты или использовать\n' +
            '                            два смартфона - постоянный российский номер всегда будет активен и одновременно будут\n' +
            '                            доступны льготные тарифы на мобильный интернет местных мобильных операторов.\n' +
            '                            С виртуальной eSIM партнеры и родственники смогут дозвонится также и по\n' +
            '                            стандартному российскому номеру.',
        button: 'primary',
        buttonText: 'Подключить',
        modal: 'auth'
    },
];
